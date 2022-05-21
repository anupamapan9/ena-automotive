import React from 'react';
import { GrProjects } from 'react-icons/gr';
import { FiUsers } from 'react-icons/fi';
import { GiDrippingStar } from 'react-icons/gi';
import { MdOutline6FtApart } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
const Summery = () => {
    return (
        <Fade bottom cascade>
            <h1 className='font-extrabold text-3xl lg:text-5xl text-center pt-5'>Our Achievements</h1>
            <div className='flex flex-col md:flex-row gap-4 justify-around py-10 '>
                <div className="bg-base-200 p-5 ">
                    <div className='flex justify-center items-center'>
                        <div className="mr-2 text-primary font-extrabold text-2xl">Total Products</div>
                        <div className="text-success">
                            <GrProjects className='text-success' />
                        </div>
                    </div>
                    <h2 className="text-neutral font-bold text-2xl text-center">30</h2>
                    <h2 className='text-center'>In the inventory</h2>
                </div>
                <div className="bg-base-200 p-5 ">
                    <div className='flex justify-center items-center'>
                        <div className="mr-2 text-primary font-extrabold text-2xl">Happy Clients</div>
                        <div>
                            <FiUsers className='text-2xl' />
                        </div>
                    </div>
                    <h2 className="text-neutral font-bold text-2xl text-center">25.6k</h2>
                    <h2 className='text-center'>Over The World</h2>
                </div>
                <div className="bg-base-200 p-5 ">
                    <div className='flex  justify-center  items-center'>
                        <div className="mr-2 text-primary font-extrabold text-2xl">Our Partner</div>
                        <div>
                            <MdOutline6FtApart className='text-2xl' />
                        </div>
                    </div>
                    <h2 className="text-neutral font-bold text-2xl text-center">60</h2>
                    <h2 className='text-center'>Work with us</h2>
                </div>
                <div className="bg-base-200 p-5">
                    <div className='flex  justify-center items-center'>
                        <div className="mr-2 text-primary font-extrabold text-2xl">Feedback Get</div>
                        <div>
                            <GiDrippingStar className='text-2xl' />
                        </div>
                    </div>
                    <h2 className="text-neutral font-bold text-2xl text-center">6k</h2>
                    <h2 className='text-center'>From Companies</h2>
                </div>

            </div>
        </Fade>
    );
};

export default Summery;

















<div className="stats shadow ">
    <div className="stat">
        <div className="stat-figure text-success">
            <GrProjects className='text-success' />
        </div>
        <div className="stat-title">Total Products</div>
        <div className="stat-value text-primary">25.6K</div>
    </div>

    <div className="stat">
        <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
    </div>

    <div className="stat">
        <div className="stat-figure text-secondary">
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                </div>
            </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
    </div>
    <div className="stat">
        <div className="stat-figure text-secondary">
            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                </div>
            </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
    </div>

</div>