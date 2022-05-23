import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ index, user, refetch }) => {
    const { email, displayName, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You can not make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made an admin')
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td><button className='btn btn-error outline-none btn-xs'>Delete</button></td>
            {
                role === 'admin' ? <td><button className='btn btn-base outline-none btn-xs' disabled>Admin</button></td> : <td><button className='btn btn-base outline-none btn-xs' onClick={makeAdmin}>Make Admin</button></td>
            }

        </tr>
    );
};

export default UserRow;