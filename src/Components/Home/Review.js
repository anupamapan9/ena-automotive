import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(`http://localhost:5000/review`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='py-10'>
            <h1 className='font-extrabold text-3xl lg:text-5xl text-center pt-5 font-secondary'>What People say?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 justify-center lg:px-20 '>
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id} />)
                }
            </div>

        </div>
    );
};

export default Review;