import React, { useEffect, useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';

import {
  CardHeaderWrapper,
  LeftSideContainer,
  RightSideContainer,
  NameAndDescriptionContainer,
  RestaurantImageContainer,
  RestaurantInfoContainer,
  MapLink,
  CardContainer,
  DishesListContainer,
  DishesList,
} from './styles';

import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaDirections } from 'react-icons/fa';

import IconBurnesBurger from '../../assets/images/iconsRestaurant/iconBurnesBurger.png';
import RestaurantSearchFoodCard from '../RestaurantSearchFoodCard';
import DefaultLogo from '../../assets/defaults/restaurant-default-logo.png';
import { api } from '../../services/api';

const WEEK_DAYS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];


const RestaurantSearchCard = ({ restaurant }) => {
  const [rating, setRating] = useState(null);
  const [closingTime, setClosingTime] = useState(null);
  const [restauranteLogo, setRestaurantLogo] = useState(DefaultLogo);

  const navigate = useNavigate();

  function redirectToRestaurantPage() {
    navigate(`/restaurant/${restaurant.restaurant_id}`)
  }

  function findIfRestaurantIsOpened() {
    const today = new Date().getDay();

    const weekDay = WEEK_DAYS[today];

    const isRestaurantOpenedToday = restaurant.operation_hour.find(day => {
      return day.day === weekDay
    })

    if (isRestaurantOpenedToday) {
      setClosingTime(isRestaurantOpenedToday.closes_at);
    }
  }

  function calculateRatingAverage() {
    const ratingsSum = restaurant.ratings.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    const averageRating = restaurant.ratings.length > 0 ?
      ratingsSum / restaurant.ratings.length : null
    setRating(averageRating)
  }

  function getRestaurantLogo() {
    const logoImage = restaurant.images.filter(image => {
      return image.path.startsWith('logo');
    })

    if (logoImage.length > 0) {
      const logoPath = `${api.defaults.baseURL}/restaurants/image/logo/${logoImage[0].path}`
      setRestaurantLogo(logoPath)
    }

  }

  useEffect(() => {
    if (restaurant.ratings) {
      calculateRatingAverage();
    }

    findIfRestaurantIsOpened();
    getRestaurantLogo();
  }, [])

  return (
    <CardContainer onClick={redirectToRestaurantPage}>
      <CardHeaderWrapper>
        <LeftSideContainer>
          <RestaurantImageContainer>
            <img src={restauranteLogo} alt='' />
          </RestaurantImageContainer>

          <NameAndDescriptionContainer>
            <div className='name-container'>
              <h2>{restaurant.name}</h2>
            </div>

            <div className='description-container'>
              <p>
                {restaurant.description}
              </p>
            </div>
          </NameAndDescriptionContainer>
        </LeftSideContainer>

        <RightSideContainer>
          {closingTime ?
            <RestaurantInfoContainer>
              <span className='icon-container'>
                <BiTimeFive />
              </span>
              <span className='text-container'>
                Fecha às {closingTime}h
              </span>
            </RestaurantInfoContainer>
            :
            <div>
              Não abre hoje
            </div>
          }

          {rating !== null &&
            <RestaurantInfoContainer>
              <span className='icon-container'>
                <AiFillStar />
              </span>
              <span className='text-container'>
                4.5
              </span>
            </RestaurantInfoContainer>}

          <MapLink>
            <span className='icon-container'>
              <FaDirections />
            </span>
            <span className='text-container'>
              Ver no mapa
            </span>
          </MapLink>
        </RightSideContainer>
      </CardHeaderWrapper>

      <DishesListContainer>
        {
          restaurant.menu.length > 0 ?
            <DishesList>
              {restaurant.menu.map(dish => (
                <RestaurantSearchFoodCard
                  food={dish}
                />
              ))}
            </DishesList>
            :
            <div className='no-dishes'>
              Esse restaurante não possui pratos cadastrados
            </div>

        }
      </DishesListContainer>
    </CardContainer>
  );
};

export default RestaurantSearchCard;
