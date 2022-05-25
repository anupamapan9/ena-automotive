import React from 'react';

import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleProduct from '../../Hooks/useSingleProduct';
import Loading from '../Common/Loading';
import { signOut } from 'firebase/auth';

const Purchase = () => {
    const { id } = useParams();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [product, isLoading, refetch] = useSingleProduct(id)
    const [user, loading] = useAuthState(auth)
    if (isLoading || loading) {
        return <Loading />
    }
    const { name, image, description, min_order, price, quantity } = product;

    const onSubmit = data => {
        const ordered_quantity = parseInt(data.ordered_quantity);
        const phone = data.phone;
        const address = data.address;
        const total_price = (ordered_quantity * price).toFixed(2);
        const orderedProduct = {
            orderer: user?.email,
            ordered_product: name,
            image,
            ordered_quantity,
            price,
            phone,
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
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    Navigate('/');
                }
                return res.json()
            })
            .then(data => {
                if (data.insertedId) {
                    const newQuantity = quantity - ordered_quantity;
                    fetch(`http://localhost:5000/product/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify({ quantity: newQuantity })
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                signOut(auth);
                                localStorage.removeItem('accessToken');
                                Navigate('/');
                            }
                            return res.json()
                        })
                        .then(data => {
                            if (data.matchedCount > 0) {
                                refetch()
                                reset()
                                toast.success('Order Placed, Visit dashboard for pay')
                            }

                        })
                }
            })
    };
    const OrderButton = <>
        {quantity > 0 ? <input type="submit" defaultValue="Place Order" className="btn mt-5 btn-primary w-full" /> : <input readOnly defaultValue="Out of Stock" className="btn mt-5 btn-error w-full" />}
    </>

    return (
        <div className='lg:px-20 flex flex-col lg:flex-row justify-around items-center gap-10'>
            <div className='md:w-1/2'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title">{name}</h2>
                        </div>

                        <p>{description}</p>
                        <div>
                            <h2 className='font-semibold'>Price: $ {price}/Unite</h2>
                            <p>Available: {quantity} Unite </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2'>
                <form onSubmit={handleSubmit(onSubmit)}>
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

                    {/* ***************** */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Quantity </span>
                        </label>
                        <input {...register("ordered_quantity", {
                            max: {
                                value: quantity,
                            },
                            min: {
                                value: min_order,
                            }, required: true
                        })} type="number" defaultValue={min_order} name='ordered_quantity' placeholder="Please Enter your quantity" className="input input-bordered" />
                        {errors.ordered_quantity?.type === 'max' && <span className='text-error'>Please Order less than {quantity}</span>}
                        {errors.ordered_quantity?.type === 'min' && <span className='text-error'>Please Order more than {min_order}</span>}
                        {errors.ordered_quantity?.type === 'required' && <span className='text-error'>Order Amount Require</span>}

                    </div>


                    {/* ******************** */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input {...register("phone", {
                            required: true

                        })} type="number" name='phone' placeholder="Please Enter your quantity" className="input input-bordered" />
                        {errors.phone?.type === 'required' && <span className='text-error'>Phone Number Require</span>}
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Shipping address</span>
                        </label>
                        <input {...register("address", {
                            required: true

                        })} type="text" name='address' required placeholder="Enter shipping address" className="input input-bordered" />
                    </div>

                    {
                        (errors.ordered_quantity?.type === 'max' || errors.ordered_quantity?.type === 'min' || errors.ordered_quantity?.type === 'required') ? <input className="btn mt-5 btn-primary w-full" disabled type="submit" /> : OrderButton
                    }

                </form>
            </div>
        </div>
    );
};

export default Purchase;