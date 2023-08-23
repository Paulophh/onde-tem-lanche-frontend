import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const CardWrapper = styled.div`
  width: 520px;
  height: 522px;
  border-radius: 0px 0px 5px 5px;
  background: #FEFEFE;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 8px;
`;

export const RestaurantName = styled.h2`
  margin: 8px 0;
  color: #000;
  font-family: Ubuntu;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;

export const Description = styled.p`
  color: #3F3F3F;
  font-family: Ubuntu;
  font-size: 0%.7;
  font-style: normal;
  font-weight: 300;
  line-height: 9px;
`;

export const CardInfomation = styled.div`
  display: flex;
  width: 175.247px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 6px 3px;
  flex-wrap: wrap;
`;

export const ClosingTime = styled.div`
  display: flex;
  align-items: center;
`;

export const ClockIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;

export const MapLink = styled.a`
  display: flex;
  padding: 1.25px 1.15px;
  justify-content: center;
  align-items: center;
  gap: 0.75px;
  border-radius: 2px;
  background: #F28705;
`;

const StyledStarIcon = styled(AiFillStar)`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  background: #Ff8000;
`;