import React from 'react';

const UserRow = ({ index, user }) => {
    const { email, displayName } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td><button className='btn btn-error outline-none btn-xs'>Delete</button></td>
            <td><button className='btn btn-base outline-none btn-xs'>Admin</button></td>
        </tr>
    );
};

export default UserRow;