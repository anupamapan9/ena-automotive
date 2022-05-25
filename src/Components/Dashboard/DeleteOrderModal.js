import React from 'react';
import toast from 'react-hot-toast';

const DeleteOrderModal = ({ pid, name, setConfirmDelete, refetch }) => {

    const handelDelete = id => {
        setConfirmDelete(false)
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Delete')
                    refetch()
                }
            })


    }

    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-sm btn-circle btn-success absolute right-2 top-2" onClick={() => setConfirmDelete(false)}>✕</label>
                    <h3 class="font-bold text-lg">Are You Sure Want to delete <span className='text-error'>{name}</span> </h3>
                    <p class="py-4">It Will delete from your database fore ever</p>
                    <div class="modal-action">

                        <label for="my-modal" className='btn btn-error' onClick={() => handelDelete(pid)}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;