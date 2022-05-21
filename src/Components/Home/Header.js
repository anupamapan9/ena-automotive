import React from 'react';
import header1 from '../../image/header1.jpg'
import header2 from '../../image/header2.jpg'
import header3 from '../../image/header3.jpg'
import header4 from '../../image/header4.jpg'
const Header = () => {
    return (
        <div className="carousel h-[89.5vh] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={header1} alt='' className="w-full image-full" />
                <div className='absolute w-full h-full text-3xl text-white font-bold flex justify-center items-center '>
                    <h1 className=''>Global Leader in Drivetrain and <br /> e-Propulsion Systems</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={header2} alt='' className="w-full" />
                <div className='absolute w-full h-full text-3xl text-white font-bold flex justify-center items-center '>
                    <h1 className=''>Global Leader in Drivetrain and <br /> e-Propulsion Systems</h1>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={header3} alt='' className="w-full" />
                <div className='absolute w-full h-full text-3xl text-white font-bold flex justify-center items-center '>
                    <h1 className=''>Global Leader in Drivetrain and <br /> e-Propulsion Systems</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={header4} alt='' className="w-full" />
                <div className='absolute w-full h-full text-3xl text-white font-bold flex justify-center items-center '>
                    <h1 className=''>Global Leader in Drivetrain and <br /> e-Propulsion Systems</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Header;