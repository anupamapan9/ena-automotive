import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products] = useProducts()
    console.log(products)
    return (
        <div className='md:px-10 lg:px-20'>
            <h1 className='font-bold text-3xl lg:text-5xl text-center pt-5 font-secondary'>Our Automotive</h1>
            <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    products.map(product => <ProductsCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;