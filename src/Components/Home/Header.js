import React from 'react';
import header1 from '../../image/header1.jpg'
import header2 from '../../image/header2.jpg'
import header3 from '../../image/header3.jpg'
import header4 from '../../image/header4.jpg'
const Header = () => {
    return (
        <div className="carousel h-[89.5vh] w-full">
            <div className="carousel-item relative w-full">
                <img src={header4} alt='' className="w-full image-full" />
                <div className='absolute w-full h-full text-white font-bold items-center flex lg:px-20 '>
                    <div>
                        <h1 className='md:text-6xl text-3xl'>Global Leader in Manufacture  <br /> Automotive parts</h1>
                        <button className='btn btn-primary rounded-none text-right'><a href="#products"> Start A Journey With Us</a></button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                </div>
            </div>
        </div>
    );
};

export default Header;