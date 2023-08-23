import React from 'react';
import { CardWrapper, RestaurantImage, RestaurantName, Description, ClosingTime, ClockIcon, StarRating, MapLink, CardInfomation } from './styles'; // Note que removi StarIcon, já que você está usando o ícone diretamente
import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai'; 

const HighlightsCard = ({ name, imageSrc, description, closingTime, starRating }) => {
  return (
    <CardWrapper>
      <RestaurantImage src={imageSrc} alt={`Image of ${name}`} />
      <div>
        <RestaurantName>{name}</RestaurantName>
        <Description>{description}</Description>
        <CardInfomation>
          <ClosingTime>
            <BiTimeFive />
            {closingTime}
          </ClosingTime>
          <StarRating>
            <AiFillStar />
            {starRating} stars
          </StarRating>
        </CardInfomation>
      </div>
      <MapLink href="#">Ver no mapa</MapLink>
    </CardWrapper>
  );
};

export default HighlightsCard;
