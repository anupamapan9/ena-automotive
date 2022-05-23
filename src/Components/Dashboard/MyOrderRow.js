import React from 'react';

const MyOrderRow = ({ index, userOrder }) => {
    const { ordered_product, total_price, status, ordered_quantity } = userOrder;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{ordered_product}</td>
            <td>{total_price}</td>
            <td>{status}</td>
            <td>{ordered_quantity}</td>
            <td><button className='btn btn-error outline-none btn-xs'>Cancel</button></td>
            <td><button className='btn btn-success outline-none btn-xs'>Pay</button></td>
        </tr>
    );
};

export default MyOrderRow;