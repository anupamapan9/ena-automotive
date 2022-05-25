import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrderRow = ({ index, userOrder, refetch }) => {
    const { ordered_product, total_price, status, ordered_quantity, _id } = userOrder;
    const [confirmDelete, setConfirmDelete] = useState(false)
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{ordered_product}</td>
                <td>{total_price}</td>
                <td>{status}</td>
                <td>{ordered_quantity}</td>
                <td>   <label for="my-modal" onClick={() => setConfirmDelete(!confirmDelete)} className='btn btn-error btn-xs'>Delete</label></td>
                <td><Link to={`/dashboard/payment/${_id}`} className='btn btn-success outline-none btn-xs'>Pay</Link></td>
            </tr>
            {
                confirmDelete && <DeleteOrderModal refetch={refetch} pid={_id} name={ordered_product} setConfirmDelete={setConfirmDelete} />
            }
        </>

    );
};

export default MyOrderRow;