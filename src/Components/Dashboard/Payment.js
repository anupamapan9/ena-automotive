import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51L1Q0hLIOSuHsWeTJA73wJRhFfxf8NdeMCz1tQI9jOmFznB70dFlFBHkdBXl5i7FSyhqOptxrOxrYvubz1V3BjGl00w1uHvKXq');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/ordered/${id}`
    const { data: paymentProduct, isLoading, refetch } = useQuery(['paymentProduct', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                Navigate('/');
            }
            return res.json()
        }))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card lg:w-1/2 bg-base-100 shadow-xl">

                <figure><img src={paymentProduct.image} alt="Shoes" className='lg:w-full lg:h-96' /></figure>
                <div class="card-body">
                    <h1 className='font-medium text-2xl'>{paymentProduct.ordered_product}</h1>
                    <h5 className='font-medium'>Ordered: {paymentProduct.ordered_quantity} Unit</h5>
                    <h5 className='font-medium'>Total: {paymentProduct.total_price} Unit</h5>
                </div>
            </div>
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckOutForm paymentProduct={paymentProduct} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;