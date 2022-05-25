import React, { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const ManageProductRow = ({ index, product, refetch }) => {
    // const { name, }
    const [confirmDelete, setConfirmDelete] = useState(false)

    return (<>


        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={product.image} alt='' />
                </div>
            </div></td>
            <td>{product.name}</td>
            <td>
                <label for="my-modal" onClick={() => setConfirmDelete(!confirmDelete)} className='btn btn-error btn-xs'>Delete</label>
            </td>
        </tr>
        {
            confirmDelete && <ConfirmDeleteModal refetch={refetch} pid={product._id} name={product.name} setConfirmDelete={setConfirmDelete} />
        }

    </>
    );
};

export default ManageProductRow;