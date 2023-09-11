import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 90vw;
  max-width: 1100px;
  margin: 20px auto;

  &:hover {
    cursor: pointer;
  }
`;

export const CardHeaderWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  @media only screen and (min-width: 950px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  @media only screen and (min-width: 950px) {
    margin-bottom: 0;
  }
`;

export const RestaurantImageContainer = styled.div`
  text-align: left;
  
  img {
    width: 80px;
  }

  @media only screen and (min-width: 750px) {
    img {
      width: 120px;
    }
  }
`;

export const NameAndDescriptionContainer = styled.div`
  flex: 1;

  .name-container h2 {
    margin: 0;
    font-size: 2.0rem;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
    line-height: 15px; 
  }

  .description-container p {
    color: ${props => props.theme.colors['text-light-grey']};
    font-size: 1.1rem;
    margin-top: 15px;

    max-height: 50px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
  }

  @media only screen and (min-width: 750px) {
    .name-container h2 {
      font-size: 2.6rem;
    }

    .description-container p {
      font-size: 1.5rem;
      
    }
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and (min-width: 550px) {
    gap: 10px;
  }

  @media only screen and (min-width: 950px) {
    min-width: 330px;
    justify-content: flex-end;
  }
`;

export const RestaurantInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .icon-container svg {
    color: ${props => props.theme.colors.orange};
    font-size: 1.8rem;
  }

  .text-container {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 550px) {

    .icon-container svg {
      color: ${props => props.theme.colors.orange};
      font-size: 2.5rem;
    }

    .text-container {
      font-size: 1.6rem;
    }
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
  gap: 5px;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 550px) {
    font-size: 1.5rem;

    svg {
      font-size: 1.7rem;
    }
  }
`;

export const DishesListContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

  .no-dishes {
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    border-bottom: 1px solid ${props => props.theme.colors['box-shadow']};

    width: 100%;
    padding-bottom: 10px;
  }
`;

export const DishesList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

   // Esconde barra de rolagem
  &::-webkit-scrollbar {
    display: none; // Chrome e Opera
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;