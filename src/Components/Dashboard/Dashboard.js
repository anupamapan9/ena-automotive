import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Common/Loading';

const Dashboard = () => {

    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user)
    if (loading) {
        return <Loading />
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:pl-10">
                <h1 className='text-4xl font-bold text-primary'>Dashboard</h1>
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu pt-5 p-4 gap-2 overflow-y-auto w-80 rounded-md bg-slate-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>

                    {
                        !admin && <>
                            <li><Link to='add-review'>Add A review</Link></li>
                            <li><Link to='my-order'>My Orders</Link></li>
                        </>
                    }

                    {admin && <>
                        <li><Link to='all-users'>All Users</Link></li>
                        <li><Link to='all-orders'>Manage Order</Link></li>
                        <li><Link to='add-product'>Add A Product</Link></li>
                        <li><Link to='manage-products'>Manage Products</Link></li>
                    </>}


                </ul>
            </div>
        </div >
    );
};

export default Dashboard;