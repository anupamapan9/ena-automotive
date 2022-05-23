import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('userOrder', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-xl font-bold inline-block'>All Users</h2>
            {users.length}
            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete User</th>
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