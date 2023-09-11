import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

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

const WEEK_DAYS = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];

const RestaurantHighlightCard = ({ restaurant }) => {
  const [rating, setRating] = useState(null);
  const [closingTime, setClosingTime] = useState(null);
  const [imagePath, setImagePath] = useState(RestaurantExampleImage);

  // let imagePath = RestaurantExampleImage;

  // restaurant.images = restaurant.images ?? [];

  function getRestaurantImage() {
    if (restaurant.images.length > 0) {
      const restaurantImages = restaurant.images.filter(image => {
        return !image.path.startsWith('cover') && !image.path.startsWith('logo');
      })

      console.log('Veio -> ', restaurant, restaurantImages);

      if (restaurantImages.length > 0) {
        setImagePath(`${api.defaults.baseURL}/restaurants/image/${restaurantImages[0].path}`)
      }
    }
  }

  const navigate = useNavigate();

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

  function handleRedirectToRestaurant() {
    navigate(`/restaurant/${restaurant.restaurant_id}`)
  }

  useEffect(() => {
    if (restaurant.ratings) {
      calculateRatingAverage();
    }

    findIfRestaurantIsOpened();

    if (restaurant.images) {
      getRestaurantImage();
    }
  }, [restaurant])

  return (
    <CardWrapper onClick={handleRedirectToRestaurant}>

      <RestaurantImageContainer>
        <img
          src={imagePath}
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
          </Description>

          <div className='info-container'>
            <ClosingTimeAndRatingContainer>
              {closingTime ?
                <ClosingTime>
                  <span className='icon-container'>
                    <BiTimeFive />
                  </span>

                  <span className='text-container'>
                    Fecha às {closingTime}h
                  </span>
                </ClosingTime>
                :
                <div className='does-not-open'>
                  Não abre hoje
                </div>
              }

              {rating !== null &&
                <StarRating>
                  <span className='icon-container'>
                    <AiFillStar />
                  </span>

                  <span className='text-container'>
                    {rating.toFixed(1)}
                  </span>
                </StarRating>
              }
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
