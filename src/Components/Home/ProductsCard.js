import React from 'react';
const ProductsCard = ({ product }) => {
    const { name, image, description, min_order, price, quantity } = product;
    console.log(product)
    return (
        <div class="card rounded-none lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} className='h-full' alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p className='text-justify'>{description.slice(0, 100)} .. </p>
                <div>
                    <h2 className='font-semibold'>Price: $ {price}/Unite</h2>
                    <p>Available: {quantity} Unite  </p>
                    <p>Min Order: {min_order} Unite</p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary btn-xs">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;