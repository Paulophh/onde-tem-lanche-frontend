import React from 'react';
import {
  CardWrapper,
  Description,
  InformationRestaurant,
  RestaurantCardInfoContainer,
  RestaurantImageIcon,
  RestaurantInfoSecondRow,
  RestaurantNameContainer,
} from './styles';

import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaDirections } from 'react-icons/fa';

import iconBurnesBurger from '../../assets/images/iconsRestaurant/iconBurnesBurger.png';

const RestaurantCard = ({ restaurant }) => {
  return (
    <CardWrapper>
      <RestaurantImageIcon>
        <img src={iconBurnesBurger} alt='' />
      </RestaurantImageIcon>

      <RestaurantCardInfoContainer>
        <RestaurantNameContainer>
          <h2>Nome do restaurante</h2>
        </RestaurantNameContainer>

        <Description>
          <p>Descrição do restaurante...</p>
        </Description>

        <RestaurantInfoSecondRow>
          <InformationRestaurant>
            <div className='info-container'>
              <div className='info'>
                <span className='icon-container'>
                  <BiTimeFive />
                </span>
                <span className='text-container'>Fecha às 22h</span>
              </div>

              <div className='info'>
                <span className='icon-container'>
                  <AiFillStar />
                </span>
                <span className='text-container'>4.5</span>
              </div>

              <div className='info'>
                <span className='icon-container'>
                  <FaDirections />
                </span>
                <span className='text-container'>Ver no mapa</span>
              </div>
            </div>
          </InformationRestaurant>
        </RestaurantInfoSecondRow>
      </RestaurantCardInfoContainer>
    </CardWrapper>
  );
};

export default RestaurantCard;
