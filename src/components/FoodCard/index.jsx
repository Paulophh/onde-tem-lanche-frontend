import React from 'react';
import {
  CardWrapper,
  ClosingTimeAndRatingContainer,
  Description,
  FoodCardInfoContainer,
  FoodImageContainer,
  FoodInfoSecondRow,
  FoodNameContainer,
  Price,
  StarRating
} from './styles';

import FoodExampleImage from '../../assets/images/food-images/xSalada.png';
import { AiFillStar } from 'react-icons/ai';

const FoodCard = ({ food }) => {
  return (
    <CardWrapper>

      <FoodImageContainer>
        <img
          src={FoodExampleImage}
          alt=''
        />
      </FoodImageContainer>

      <FoodCardInfoContainer>
        <div>
          <FoodNameContainer>
            <h2>
              {food.name}
            </h2>
          </FoodNameContainer>
        </div>

        <FoodInfoSecondRow>
          <Description title={food.description}>
            {food.description}
          </Description>

          <div className='info-container'>
            <ClosingTimeAndRatingContainer>
              <StarRating>
                <span className='icon-container'>
                  <AiFillStar
                    size={22}
                  />
                </span>

                <span className='text-container'>
                  {food.starRating}
                </span>
              </StarRating>

              <Price>
                <span className='icon-container'>
                  <p>R$</p>
                </span>
                <span className='text-container'>
                  {food.price}
                </span>
              </Price>

            </ClosingTimeAndRatingContainer>
          </div>
        </FoodInfoSecondRow>
      </FoodCardInfoContainer>
    </CardWrapper>

  );
}

export default FoodCard;