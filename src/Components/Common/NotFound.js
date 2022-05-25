import React from 'react';
import { Link } from 'react-router-dom';
import { ImSad } from 'react-icons/im'
const NotFound = () => {
    return (
        <div className='h-screen bg-primary flex flex-col md:flex-row justify-around items-center'>
            <div className=''>
                <h2 className='text-white text-6xl font-extrabold'>Not Found</h2>
                <p className='text-white text-2xl'>Page you are looking for not there</p>
                <Link className='bg-white btn text-black hover:text-white mt-2' to='/'>Back to The home</Link>
            </div>
            <div className='text-white text-9xl '>
                <ImSad />
            </div>
        </div>
    );
};

export default NotFound;