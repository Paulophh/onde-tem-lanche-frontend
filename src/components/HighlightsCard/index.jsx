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
} from './styles'; // Note que removi StarIcon, já que você está usando o ícone diretamente

import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaDirections } from 'react-icons/fa';

import RestaurantExampleImage from '../../assets/restaurant-images/image-33.png';

const HighlightsCard = ({ restaurant }) => {
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
                  <BiTimeFive
                    size={22}
                  />
                </span>

                <span className='text-container'>
                  Fecha às {restaurant.closingTime}
                </span>
              </ClosingTime>

              <StarRating>
                <span className='icon-container'>
                  <AiFillStar
                    size={22}
                  />
                </span>

                <span className='text-container'>
                  {restaurant.starRating}
                </span>
              </StarRating>
            </ClosingTimeAndRatingContainer>

            <MapLink>
              <span className='icon-container'>
                <FaDirections
                  size={22}
                />
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

export default HighlightsCard;
