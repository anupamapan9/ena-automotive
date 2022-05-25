import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrdersByEmail from '../../Hooks/useOrersByEmail';
import Loading from '../Common/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    const [userOrders, isLoading, refetch] = useOrdersByEmail(email)
    if (loading || isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-xl font-bold inline-block'>My Orders</h2>


            {/* table  */}

            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ordered (Pic)</th>
                            <th>Cancel/ Transition ID</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            userOrders.map((userOrder, index) => <MyOrderRow userOrder={userOrder} index={index} key={userOrder._id} refetch={refetch}></MyOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;