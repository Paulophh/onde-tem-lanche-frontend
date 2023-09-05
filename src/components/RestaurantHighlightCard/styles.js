import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 6px;
  background: #FEFEFE;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 90vw;
  min-width: 300px;
  max-width: 400px;

  @media only screen and (min-width: 600px) {
    min-width: 400px;
  }
`;

export const RestaurantImageContainer = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  @media only screen and (min-width: 500px) {
    img {
      height: 260px;
    }
  }
`;

export const RestaurantCardInfoContainer = styled.div`
  padding: 0 10px 10px;
`;

export const RestaurantNameContainer = styled.div`
  margin: 12px 0;
  font-size: 1.3rem;

  @media only screen and (min-width: 500px) {
    font-size: 1.7rem;
  }
`;

export const RestaurantInfoSecondRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: #3F3F3F;
  font-size: 1.1rem;
  flex: 0.95;
  max-height: 80px;
  text-align: justify;

  // reticências:
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  overflow: hidden;

  @media only screen and (min-width: 500px) {
    font-size: 1.3rem;
  }
`;

export const ClosingTimeAndRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  margin-top: -10px;

  .does-not-open {
    font-size: 1.3rem;
    color: red;
  }
`;

export const ClosingTime = styled.div`
  display: flex;
  align-items: center;

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 2px;
  }

  .text-container {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 2px;
  }

  .text-container {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const MapLink = styled.button`
  border-radius: 8px;
  background: #F28705;
  border: none;
  padding: 5px 10px;
  color: ${props => props.theme.colors.white};
  font-size: 1.2rem;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 500px) {
    font-size: 1.4rem;

    svg {
      font-size: 1.6rem;
    }
  }
`;