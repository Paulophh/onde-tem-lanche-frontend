import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { api } from '../../services/api';

import {
    CardWrapper,
    ClosingTimeAndRatingContainer,
    Description,
    FoodCardInfoContainer,
    FoodImageContainer,
    FoodNameContainer,
    Price,
    StarRating,
    TopRowContainer
} from './styles';

import DishDefaultImage from '../../assets/defaults/dish-default-image.png';
import { useEffect } from 'react';

const RestaurantSearchFoodCard = ({ food }) => {
    const image = food.images.length > 0 ? `${api.defaults.baseURL}/dishes/image/${food.images[0].path}` : DishDefaultImage;
    const [rating, setRating] = useState(3.5);

    function calculateRatingAverage() {
        const ratingsSum = food.ratings.reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        const averageRating = food.ratings.length > 0 ?
            ratingsSum / food.ratings.length : null
        setRating(averageRating)
    }

    useEffect(() => {
        calculateRatingAverage();
    }, [])

    return (
        <CardWrapper>

            <FoodImageContainer>
                <img
                    src={image}
                    alt=''
                />
            </FoodImageContainer>

            <FoodCardInfoContainer>
                <TopRowContainer>
                    <FoodNameContainer>
                        <h2>
                            {food.name}
                        </h2>
                    </FoodNameContainer>

                    <ClosingTimeAndRatingContainer>
                        {rating !== null &&
                            <StarRating>
                                <span className='label-container'>
                                    <AiFillStar />
                                </span>

                                <span className='value-container'>
                                    {rating}
                                </span>
                            </StarRating>
                        }

                        <Price>
                            <span className='label-container'>
                                R$
                            </span>
                            <span className='value-container'>
                                {Number(food.price).toFixed(2).replace('.', ',')}
                            </span>
                        </Price>

                    </ClosingTimeAndRatingContainer>
                </TopRowContainer>

                <Description title={'food.description'}>
                    {food.description}
                </Description>
            </FoodCardInfoContainer>
        </CardWrapper>

    );
}

export default RestaurantSearchFoodCard;