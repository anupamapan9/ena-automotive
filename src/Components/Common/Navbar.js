import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li className='rounded-none md:ml-3 mb-3 md:mb-0'><NavLink to='/'>Item 1</NavLink></li>
        <li className='rounded-none md:ml-3 mb-3 md:mb-0'><NavLink to='/login'>Log in </NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link to='/' >daisyUI</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navLinks
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;