import React from 'react';
import toast from 'react-hot-toast';

const AllOrderRow = ({ allOrder, refetch }) => {
    const { orderer, ordered_product, _id, status } = allOrder;
    const handelShipped = (id) => {
        fetch(`http://localhost:5000/order/shipped/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }, body: JSON.stringify({ status: 'shipped' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Shipped')
                    refetch()
                }
            })
    }
    return (
        <tr>
            <td>{ordered_product}</td>
            <td>{orderer}</td>
            <td>{status}</td>
            <td>
                {status === 'paid' && <button onClick={() => handelShipped(_id)} className='btn btn-accent btn-xs'>Ship</button>}
                {status === 'shipped' && <button className='btn btn-xs btn-disabled'>Shipped</button>}
            </td>
        </tr>
    );
};

export default AllOrderRow;