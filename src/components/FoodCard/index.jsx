import React from 'react';
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

const FoodCard = ({ food }) => {
  const image = food.images.length > 0 ? `${api.defaults.baseURL}/dishes/image/${food.images[0].path}` : DishDefaultImage;

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
            <StarRating>
              <span className='label-container'>
                <AiFillStar />
              </span>

              <span className='value-container'>
                {food.rating}
              </span>
            </StarRating>

            <Price>
              <span className='label-container'>
                R$
              </span>
              <span className='value-container'>
                {food.price}
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

export default FoodCard;