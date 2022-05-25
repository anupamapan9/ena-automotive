import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrderRow = ({ index, userOrder, refetch }) => {
    const { ordered_product, total_price, status, ordered_quantity, _id, transactionId } = userOrder;
    const [confirmDelete, setConfirmDelete] = useState(false)

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{ordered_product}</td>
                <td>{total_price}</td>
                <td>{status}</td>
                <td>{ordered_quantity}</td>
                <td>{status !== 'paid' ? <label for="my-modal" onClick={() => setConfirmDelete(!confirmDelete)} className='btn btn-error btn-xs'>Delete</label> : <span className='text-sm'>{transactionId}</span>}  </td>
                <td> {status !== 'paid' ? <Link to={`/dashboard/payment/${_id}`} className='btn btn-success outline-none btn-xs'>Pay</Link> : <span className='text-success'>Paid</span>}</td>
            </tr>
            {
                confirmDelete && <DeleteOrderModal refetch={refetch} pid={_id} name={ordered_product} setConfirmDelete={setConfirmDelete} />
            }
        </>

    );
};

export default MyOrderRow;