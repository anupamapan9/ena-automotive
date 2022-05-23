import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrdersByEmail from '../../Hooks/useOrersByEmail';
import Loading from '../Common/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    console.log(email)
    const [userOrders, isLoading, refetch] = useOrdersByEmail(email)
    if (loading || isLoading) {
        return <Loading />
    }
    console.log(userOrders)

    return (
        <div>
            <h2 className='text-xl font-bold inline-block'>My Orders</h2>


            {/* table  */}

            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Ordered (Pic)</th>
                            <th>Cancel</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            userOrders.map((userOrder, index) => <MyOrderRow userOrder={userOrder} index={index} key={userOrder._id}></MyOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;