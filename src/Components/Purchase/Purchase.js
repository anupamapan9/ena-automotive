import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleProduct from '../../Hooks/useSingleProduct';
import Loading from '../Common/Loading';

const Purchase = () => {
    const { id } = useParams();

    const [product, isLoading, refetch] = useSingleProduct(id)
    const [user, loading] = useAuthState(auth)
    if (isLoading || loading) {
        return <Loading />
    }
    const { name, image, description, min_order, price, quantity } = product;


    const handelPlaceOrder = e => {
        e.preventDefault()
        const ordered_quantity = parseInt(e.target.ordered_quantity.value);
        const address = e.target.address.value;
        if (min_order > ordered_quantity) {
            toast.error(`Opps!! Please Order more than ${min_order}`)
        } else if (ordered_quantity > quantity) {
            toast.error(`Sorry we haven't stock more than ${quantity}`)
        } else {
            const total_price = (ordered_quantity * price).toFixed(2);
            const orderedProduct = {
                orderer: user?.email,
                ordered_product: name,
                image,
                ordered_quantity,
                price,
                total_price,
                address,
                status: 'unpaid'
            }
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(orderedProduct),
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Success:', data);
                })
        }
        e.target.reset()
    }

    return (
        <div className='lg:px-20 flex justify-around items-center gap-10'>
            <div className='w-1/2'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title">{name}</h2>
                        </div>

                        <p>{description}</p>
                        <div>
                            <h2 className='font-semibold'>Price: $ {price}/Unite</h2>
                            <p>Available: {quantity} Unite  </p>
                            <p>Min Order: {min_order} Unite</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <form onSubmit={handelPlaceOrder}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input value={user?.displayName} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={user?.email} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Quantity( <span className='text-warning'>should more the {min_order} and less than {quantity}</span> )</span>
                        </label>
                        <input type="number" name='ordered_quantity' placeholder="Please Enter your quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" name='phone' required placeholder="Please Enter your Phone Number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Shipping address</span>
                        </label>
                        <input type="text" name='address' required placeholder="Enter shipping address" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" value='Place Order' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;