import React from 'react';
import {
  CardWrapper,
  RestaurantImageContainer,
  RestaurantNameContainer,
  Description,
  ClosingTime,
  StarRating,
  MapLink,
  RestaurantCardInfoContainer,
  RestaurantInfoSecondRow,
  ClosingTimeAndRatingContainer
} from './styles';

import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaDirections } from 'react-icons/fa';

import RestaurantExampleImage from '../../assets/restaurant-images/image-33.png';

const RestaurantHighlightCard = ({ restaurant }) => {
  return (
    <CardWrapper>

      <RestaurantImageContainer>
        <img
          src={RestaurantExampleImage}
          alt=''
        />
      </RestaurantImageContainer>

      <RestaurantCardInfoContainer>
        <div>
          <RestaurantNameContainer>
            <h2>
              {restaurant.name}
            </h2>
          </RestaurantNameContainer>
        </div>

        <RestaurantInfoSecondRow>
          <Description title={restaurant.description}>
            {restaurant.description}
            {restaurant.description}
            {restaurant.description}
            {restaurant.description}
            {restaurant.description}
            {restaurant.description}
          </Description>

          <div className='info-container'>
            <ClosingTimeAndRatingContainer>
              <ClosingTime>
                <span className='icon-container'>
                  <BiTimeFive />
                </span>

                <span className='text-container'>
                  Fecha às {restaurant.closingTime}
                </span>
              </ClosingTime>

              <StarRating>
                <span className='icon-container'>
                  <AiFillStar />
                </span>

                <span className='text-container'>
                  {restaurant.starRating.toFixed(1)}
                </span>
              </StarRating>
            </ClosingTimeAndRatingContainer>

            <MapLink>
              <span className='icon-container'>
                <FaDirections />
              </span>

              <span className='text-container'>
                Ver no mapa
              </span>
            </MapLink>
          </div>
        </RestaurantInfoSecondRow>

      </RestaurantCardInfoContainer>
    </CardWrapper>
  );
};

export default RestaurantHighlightCard;
