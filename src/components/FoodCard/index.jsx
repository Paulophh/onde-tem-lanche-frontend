import React from 'react';
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
          Duas carnes, alface, tomate, cebola, queijo e molho caseiro da casa.
        </Description>
      </FoodCardInfoContainer>
    </CardWrapper>

  );
}

export default FoodCard;