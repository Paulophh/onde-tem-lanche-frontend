import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 6px;
  background: #FEFEFE;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const FoodImageContainer = styled.div` 
  width: 100%;
  height: 266;
  flex-shrink: 0;
  border-radius: 2px 2px 0px 0px;
`;

export const FoodCardInfoContainer = styled.div`
  padding: 0 10px 10px;
`;

export const FoodNameContainer = styled.div`
  margin: 12px 0;
  font-size: 1.2rem;
`;

export const FoodInfoSecondRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: #3F3F3F;
  font-size: 7rem;
  flex: 0.9;
  max-height: 9px;

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

export const Price = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

