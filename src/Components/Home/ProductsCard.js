import React from 'react';
import { Link } from 'react-router-dom';
const ProductsCard = ({ product }) => {
    const { name, image, description, min_order, price, quantity, _id } = product;
    return (
        <div className="card rounded-none lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} className='h-full' alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description.slice(0, 100)} .. </p>
                <div>
                    <h2 className='font-semibold'>Price: $ {price}/Unite</h2>
                    <p>Available: {quantity} Unite  </p>
                    <p>Min Order: {min_order} Unite</p>
                </div>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`} className="btn btn-primary btn-xs">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;