import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { BsPencilFill } from 'react-icons/bs'
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useUserprofile from '../../Hooks/useUserprofile';
import Loading from '../Common/Loading';
const MyProfile = () => {
    const [isEdit, setEdit] = useState(false)
    const manageEdit = () => {
        setEdit(!isEdit)
    }
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    const [updatedUser, isLoading, refetch] = useUserprofile(email)

    const handelEditUser = e => {
        e.preventDefault()
        const education = e.target.education.value;
        const phone = e.target.phone.value;
        const city = e.target.city.value;
        const social = e.target.social.value;
        const imageStorageKey = 'f721c5682ba4821a0a2817c153c428de';
        const image = e.target.image.files[0];


        const formData = new FormData();
        formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageKey}`

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const avatar = result.data.url
                    const currentUser = {
                        education,
                        phone,
                        city,
                        social,
                        avatar
                    }
                    fetch(`https://young-gorge-13678.herokuapp.com/user/update/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(currentUser)
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
                            if (data.modifiedCount > 0) {
                                toast.success('successFully uploaded')
                                e.target.reset()
                                refetch()
                            }
                        })
                }
            })

    }
    if (isLoading || loading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-xl font-bold inline-block py-5'>My Profile</h2>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-5/12 px-10'>
                    <div className='flex justify-between items-start bg-cyan-600 rounded-t' >
                        <div class="avatar">
                            <div class="w-24 rounded">
                                <img src={updatedUser.avatar} alt='' />
                            </div>
                        </div>
                        <button onClick={manageEdit} className='bg-primary p-2 rounded text-white'><p><BsPencilFill className='inline-block' />  Edit</p></button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <tbody>
                                {/* - row 1  */}
                                <tr>
                                    <th className='hover:bg-cyan-500 bg-cyan-600 duration-300'>Name: {user?.displayName}</th>
                                </tr>
                                {/* row 2  */}
                                <tr >
                                    <th className='hover:bg-cyan-600 bg-cyan-500 duration-300'>Email: {email}</th>
                                </tr>
                                {/* row3 */}
                                <tr>
                                    <th className='hover:bg-cyan-500 bg-cyan-600 duration-300'>Phone: {updatedUser.phone}</th>
                                </tr>
                                <tr>
                                    <th className='hover:bg-cyan-600 bg-cyan-500 duration-300'>Address: {updatedUser.city}</th>
                                </tr>
                                <tr>
                                    <th className='hover:bg-cyan-600 bg-cyan-500 duration-300'>Education: {updatedUser.education}</th>
                                </tr>
                                <tr>
                                    <th className='hover:bg-cyan-500 bg-cyan-600 duration-300'><a href={updatedUser.social} target="_blank" rel="noopener noreferrer">Linked In: {updatedUser.social}</a></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                {
                    isEdit &&
                    <div class="card  bg-cyan-500 text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-white">Update Your Profile</h2>
                            <form onSubmit={handelEditUser}>
                                <div class="form-control w-full max-w-xs">
                                    <input type="text" placeholder="Enter Your Education" name='education' class="input input-bordered w-full max-w-xs" />
                                </div>

                                <div class="form-control w-full mt-2 max-w-xs">
                                    <input type="text" placeholder="Enter Phone Number" class="input input-bordered w-full max-w-xs" name='phone' />
                                </div>
                                <div class="form-control w-full mt-2 max-w-xs">
                                    <input type="text" placeholder="Enter City Name" name='city' class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full mt-2 max-w-xs">
                                    <input type="text" placeholder="Enter LinkedIn Profile name"
                                        name='social'
                                        class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full mt-2 max-w-xs">
                                    <input type="file" name='image' placeholder="Enter LinkedIn Profile name" class="w-full max-w-xs" />
                                </div>
                                <div class="card-actions">
                                    <input type="submit" value="Update" class="btn btn-primary" />
                                    <button class="btn btn-warning" onClick={() => setEdit(false)}>Cancel</button>
                                </div>
                            </form>

                        </div>
                    </div>}
                <div>

                </div>
            </div>


        </div>
    );
};

export default MyProfile;