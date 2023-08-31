import React from 'react';
import {
  CardWrapper,
  LeftSideContainer,
  RightSideContainer,
  NameAndDescriptionContainer,
  RestaurantImageContainer,
  RestaurantInfoContainer,
  MapLink
} from './styles';

import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaDirections } from 'react-icons/fa';

import IconBurnesBurger from '../../assets/images/iconsRestaurant/iconBurnesBurger.png';

const RestaurantSearchCard = ({ restaurant }) => {
  return (
    <CardWrapper>
      <LeftSideContainer>
        <RestaurantImageContainer>
          <img src={IconBurnesBurger} alt='' />
        </RestaurantImageContainer>

        <NameAndDescriptionContainer>
          <div className='name-container'>
            <h2>Nome do restaurante</h2>
          </div>

          <div className='description-container'>
            <p>
              Descrição do restaurante
              Descrição do restaurante
              Descrição do restaurante
            </p>
          </div>
        </NameAndDescriptionContainer>
      </LeftSideContainer>

      <RightSideContainer>
        <RestaurantInfoContainer>
          <span className='icon-container'>
            <BiTimeFive />
          </span>
          <span className='text-container'>
            Fecha às 22h
          </span>
        </RestaurantInfoContainer>

        <RestaurantInfoContainer>
          <span className='icon-container'>
            <AiFillStar />
          </span>
          <span className='text-container'>
            4.5
          </span>
        </RestaurantInfoContainer>

        <MapLink>
          <span className='icon-container'>
            <FaDirections />
          </span>
          <span className='text-container'>
            Ver no mapa
          </span>
        </MapLink>
      </RightSideContainer>
    </CardWrapper>
  );
};

export default RestaurantSearchCard;
