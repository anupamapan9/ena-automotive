import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const handelAddProduct = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const min_order = e.target.min_order.value;
        const quantity = e.target.quantity.value;
        const imageStorageKey = 'f721c5682ba4821a0a2817c153c428de';
        const image = e.target.image.files[0];


        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url
                    const product = {
                        name,
                        price,
                        description,
                        min_order,
                        quantity,
                        image
                    }
                    fetch(`http://localhost:5000/review`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                toast.success('successFully uploaded')
                                e.target.reset()

                            }
                        })
                }
            })

    }



    return (
        <div>
            <h2>Add a Products</h2>

            <form onSubmit={handelAddProduct}>
                <div class="form-control w-full max-w-xs">
                    <input type="text" placeholder="Product Name" name='name' class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full mt-2 max-w-xs">
                    <input type="number" placeholder="Product Price " class="input input-bordered w-full max-w-xs" name='price' />
                </div>
                <div class="form-control w-full mt-2 max-w-xs">
                    <textarea placeholder="Product Description" name='description' class="input input-bordered w-full max-w-xs" id="" cols="30" rows="10"></textarea>

                </div>
                <div class="form-control w-full mt-2 max-w-xs">
                    <input type="number" placeholder="Minimum Order Quantity"
                        name='min_order'
                        class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full mt-2 max-w-xs">
                    <input type="number" placeholder="Quantity"
                        name='quantity'
                        class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full mt-2 max-w-xs">
                    <input type="file" name='image' placeholder="Enter LinkedIn Profile name" class="w-full max-w-xs" />
                </div>
                <div class="card-actions">
                    <input type="submit" value="Update" class="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;