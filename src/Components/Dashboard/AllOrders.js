import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from "react-query"
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import AllOrderRow from './AllOrderRow';
const AllOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch(`https://young-gorge-13678.herokuapp.com/order`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                Navigate('/');
            }
            return res.json()
        }))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div>
                <h2 className='text-xl font-bold inline-block'>Manage Users</h2>
                <div className="overflow-x-auto mt-5">
                    <table className="table min-h-0 w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Shipped</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allOrders.map(allOrder => <AllOrderRow allOrder={allOrder} key={allOrder._id} refetch={refetch}></AllOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;