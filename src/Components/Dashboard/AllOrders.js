import React from 'react';
import { useQuery } from "react-query"
import Loading from '../Common/Loading';
import AllOrderRow from './AllOrderRow';
const AllOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch(`http://localhost:5000/order`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
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