import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
// import Loading from '../Common/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // using email and password login 
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);

    }
    // google login 
    const handelGoogleLogin = () => {
        signInWithGoogle()
    }
    // get JWT TOKEN


    const [token] = useToken(user || gUser)
    if (token) {
        toast.success('Logged In')
        navigate(from, { replace: true });
    }
    // if (loading || gLoading) {
    //     return <Loading />
    // }
    if (error || gError) {
        toast.error(error.message || gError.message)
    }
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 ml-5">
                    <h1 className="text-5xl font-bold">Sign In</h1>
                    <p className="py-6">
                        Welcome back!!We missed you Please Login
                    </p>

                    <p>
                        New In? <Link to='/signup' className='font-bold text-success' >Sign Now!!</Link>
                    </p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/forgotten' className='text-error'>Forgotten Password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='Sign Up' className="btn btn-primary" />
                            </div>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>
                            <button className='w-full btn btn-primary my-2' onClick={handelGoogleLogin}>Continue With Google</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;