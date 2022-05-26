import React from 'react';
import img from '../../image/automotive.jpg'
const CompanyBrief = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-0 gap-5'>
            <div className=' md:pr-10 order-2 md:order-1'>
                <h1 className='font-extrabold text-3xl md:text-5xl'>Ena Automotive is an international group of companies</h1>
                <p className=' md:text-xl mt-5'>Complementing its success in the construction market Knauf Group has continued its development in the plastics business under the brand name KNAUF Industries.</p>
            </div>
            <div className='order-1 md:order-2'>
                <img src={img} className="w-full" alt="" />
            </div>

        </div>
    );
};

export default CompanyBrief;