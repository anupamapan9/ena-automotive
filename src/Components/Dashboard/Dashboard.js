import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='profile'>My Profile</Link></li>
                    <li><Link to='all-orders'>All Order</Link></li>
                    <li><Link to='all-users'>All Users</Link></li>

                </ul>
            </div>
        </div >
    );
};

export default Dashboard;