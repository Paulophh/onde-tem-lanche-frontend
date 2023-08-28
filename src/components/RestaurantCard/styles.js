import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  width: 1280px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const RestaurantImageIcon = styled.div`
  text-align: left;
  
  img {
    width: 154px;
    height: 137px;
  }
`;

export const RestaurantCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 0 0 auto;
`;

export const RestaurantNameContainer = styled.div`
  h2 {
    margin: 0;
    font-size: 3.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
    line-height: 15px; 
  }
`;

export const RestaurantInfoSecondRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  color: #3F3F3F;
  font-size: 1.8rem;
  margin-top: 10px;
`;

export const RightAlignedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  flex-grow: 1;
`;

export const InformationRestaurant = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  .info-container {
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    gap: 10px;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .icon-container {
    color: ${props => props.theme.colors.orange};
    margin-right: 2px;
    font-size: 1.5rem;
  }

  .text-container {
    font-size: 1.5rem;
  }
`;

export const StarRating = styled.div`
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

export const MapLink = styled.a`
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
`;

export const DescriptionAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  margin-right: 5px;
`;
