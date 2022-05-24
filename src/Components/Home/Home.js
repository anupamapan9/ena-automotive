import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Loading from '../Common/Loading';
import Header from './Header';
import Products from './Products';
import Review from './Review';
import Summery from './Summery';

const Home = () => {
    const [products, fetching] = useProducts()
    if (fetching) {
        return <Loading />
    }
    return (
        <>
            <Header />
            <Products />
            <Summery />
            <Review />
        </>
    );
};

export default Home;