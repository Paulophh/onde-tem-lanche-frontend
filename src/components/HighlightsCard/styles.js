import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 6px;
  background: #FEFEFE;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 600px;

  // remover:
  margin-left: 120px;
`;

export const RestaurantImageContainer = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }
`;

export const RestaurantCardInfoContainer = styled.div`
  padding: 0 10px 10px;
`;

export const RestaurantNameContainer = styled.div`
  margin: 12px 0;
  font-size: 1.6rem;
`;

export const RestaurantInfoSecondRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: #3F3F3F;
  font-size: 1.4rem;
  flex: 0.9;
  max-height: 80px;

  // reticências:
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  overflow: hidden;
`;

export const ClosingTimeAndRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: -10px;
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

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 4px;
  }

  .text-container {
    font-size: 1.4rem;
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 4px;
  }

  .text-container {
    font-size: 1.4rem;
  }
`;

export const StarIcon = styled.img`
  width: 14px;
  height: 14px;
  flex-shrink: 0;
`;

export const MapLink = styled.button`
  border-radius: 8px;
  background: #F28705;
  border: none;
  padding: 10px 30px;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;