import React from 'react';
import client1 from '../../image/client1.png'
import client2 from '../../image/client2.png'
import client3 from '../../image/client3.png'
import client4 from '../../image/client4.jpg'
import client5 from '../../image/client5.png'
import client6 from '../../image/client6.png'
import client7 from '../../image/client7.png'
import client8 from '../../image/client8.jpg'
import client9 from '../../image/client9.jpg'
import client10 from '../../image/client10.png'
const Clients = () => {
    return (
        <div className=''>
            <h1 className='font-extrabold text-3xl lg:text-5xl text-center py-5 font-secondary'>Our Clients</h1>
            <div className='grid grid-cols-1 justify-center gap-5 md:grid-cols-3 lg:grid-cols-5 px-20'>
                <div className='border-2 border-gray-500' ><img className='w-full' src={client1} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client2} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client3} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client4} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client5} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client6} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client7} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client8} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client9} alt="" /></div>
                <div className='border-2 border-gray-500' ><img src={client10} alt="" /></div>

            </div>
        </div>

    );
};

export default Clients;