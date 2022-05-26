import React from 'react';
import { Fade } from 'react-reveal';
import useProducts from '../../Hooks/useProducts';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products] = useProducts();
    return (
        <div id='products' className='py-20 md:px-10 lg:px-20 '>
            <Fade bottom>
                <h1 className='font-extrabold text-3xl lg:text-5xl text-center pt-5 font-secondary'>Our Products</h1>

                <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>

                    {
                        products.map(product => <ProductsCard key={product._id} product={product} />)
                    }

                </div>
            </Fade>
        </div>
    );
};

export default Products;