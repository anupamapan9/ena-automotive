import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';
const ReviewCard = ({ review }) => {
    const { displayName, rating, description } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">

            <div class="card-body">
                <div class="avatar">
                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt='' />
                    </div>
                </div>
                <h2 class="card-title">{displayName ? displayName : 'Anonymous'}</h2>
                <p>{description}</p>
                <div class="card-actions justify-start">
                    <Rating
                        initialRating={rating}
                        emptySymbol={<AiFillStar />}
                        fullSymbol={<AiFillStar style={{ color: 'goldenrod' }} />}
                        readonly
                    ></Rating>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;