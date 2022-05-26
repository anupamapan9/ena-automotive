import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('userOrder', () => fetch(`https://young-gorge-13678.herokuapp.com/user`, {
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
        <div>
            <h2 className='text-xl font-bold inline-block'>Manage Users</h2>
            {users.length}
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <UserRow user={user} index={index} key={user._id} refetch={refetch}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUsers;