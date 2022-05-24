import React, { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useState(auth)

    const handelPlaceOrder = e => {

        e.preventDefault()
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const displayName = e.target.displayName.value
        const review = {
            rating,
            description,
            displayName
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Thanks for the review')
                    e.target.reset()
                }
            })

    }
    return (
        <div>
            <h2 className='text-xl font-bold inline-block'>Say something about us</h2>
            <form onSubmit={handelPlaceOrder}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                        <span class="label-text-alt">Alt label</span>
                    </label>
                    <input type="text" required name='displayName' placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                </div>


                <div class="form-control w-full max-w-xs mt-2">
                    <label class="label">
                        <span class="label-text">Please Enter Your rating</span>

                    </label>
                    <select class="select select-bordered" required name='rating'>
                        <option disabled selected>Pick one</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                </div>
                <div class="form-control w-full max-w-xs mt-2">
                    <label class="label">
                        <span class="label-text">Please say your words</span>
                    </label>
                    <textarea class="textarea  select-bordered" required name='description' placeholder="Say something.........."></textarea>
                    <input type="submit" defaultValue="Add Review" className="btn mt-5 btn-primary w-full" />
                </div>
            </form>
        </div>

    );
};

export default AddReview;