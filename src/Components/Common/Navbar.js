import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        toast.success('Logout Successful')
    };
    const navLinks = <>
        <li className='md:ml-3 mb-3 md:mb-0'><NavLink to='/'>Home</NavLink></li>
        <li className='md:ml-3 mb-3 md:mb-0'><NavLink to='/blog'>Blog</NavLink></li>
        <li className='md:ml-3 mb-3 md:mb-0'><NavLink to='/portfolio'>Portfolio</NavLink></li>
        {
            !user ?
                <li className='md:ml-3 mb-3 md:mb-0'><NavLink to='/login'>Log in </NavLink></li>
                :
                <li className='md:ml-3 mb-3 md:mb-0 bg-accent-focus'><button onClick={logout}>Log Out</button></li>

        }

    </>
    return (
        <div className="navbar bg-base-100 px-10 md:px-20">
            <div className="navbar">

                <Link className='font-secondary font-extrabold text-xl md:text-3xl' to='/' >Ena Automotive</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;