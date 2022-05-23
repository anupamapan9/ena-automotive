import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleProduct from '../../Hooks/useSingleProduct';
import Loading from '../Common/Loading';

const Purchase = () => {
    const { id } = useParams();
    // const [product, setProduct] = useState({});
    // use
    const [product, isLoading, refetch] = useSingleProduct(id)
    const [user, loading] = useAuthState(auth)
    if (isLoading || loading) {
        return <Loading />
    }
    const { name, image, description, min_order, price, quantity } = product;


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
                <form>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value='Sign Up' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;