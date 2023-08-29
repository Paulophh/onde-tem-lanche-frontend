import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 5px;
  background: #FEFEFE;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 320px;

  margin-bottom: 30px;
`;

export const FoodImageContainer = styled.div` 
  border-radius: 5px 5px 0px 0px;

  img {
    width: 100%;
    border-radius: inherit;
  }
`;

export const FoodCardInfoContainer = styled.div`
  padding: 0 10px 10px;
`;

export const TopRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FoodNameContainer = styled.div`
  max-width: 180px;

  h2 {
    margin: 12px 0;
    font-size: 1.9rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ClosingTimeAndRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .label-container {
    color: ${props => props.theme.colors.orange};
    font-size: 1.8rem;
    margin-top: 4px;
  }

  .value-container {
    font-size: 1.7rem;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .label-container {
    color: ${props => props.theme.colors.orange};
    font-size: 1.8rem;
  }

  .value-container {
    font-size: 1.7rem;
  }
`;

export const Description = styled.div`
  color: ${props => props.theme.colors['text-light-grey']};
  font-size: 1.4rem;
  height: 65px;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  overflow: hidden;
`;

