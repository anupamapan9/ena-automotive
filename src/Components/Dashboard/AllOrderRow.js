import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteOrderModal from './DeleteOrderModal';

const AllOrderRow = ({ allOrder, refetch }) => {
    const navigate = useNavigate()
    const { orderer, ordered_product, _id, status } = allOrder;
    const [confirmDelete, setConfirmDelete] = useState(false)
    const handelShipped = (id) => {
        fetch(`https://young-gorge-13678.herokuapp.com/order/shipped/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }, body: JSON.stringify({ status: 'shipped' })
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Shipped')
                    refetch()
                }
            })
    }
    return (
        <>

            <tr>
                <td>{ordered_product}</td>
                <td>{orderer}</td>
                <td>{status}</td>
                <td>{status === 'unpaid' ? <label for="my-modal" onClick={() => setConfirmDelete(!confirmDelete)} className='btn btn-error btn-xs'>Delete</label> : <></>}  </td>
                <td>
                    {status === 'pending' && <button onClick={() => handelShipped(_id)} className='btn btn-accent btn-xs'>Ship</button>}
                    {status === 'shipped' && <button className='btn btn-xs btn-disabled'>Shipped</button>}
                </td>
            </tr>
            {
                confirmDelete && <DeleteOrderModal refetch={refetch} pid={_id} name={ordered_product} setConfirmDelete={setConfirmDelete} />
            }
        </>

    );
};

export default AllOrderRow;