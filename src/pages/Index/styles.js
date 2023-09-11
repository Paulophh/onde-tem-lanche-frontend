import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationSearchContainer = styled.form`
  width: 90vw;
  padding: 10px;
  margin: 10px auto;

  h2, h3 {
    text-align: center;
    font-weight: normal;
  }

  h3 {
    font-size: 1.6rem;
    margin-top: 10px;
    font-weight: bold;
  }

  .autocomplete-container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const HighlightsCardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  min-height: 340px;

  max-width: 100vw;
  overflow-x: scroll;

  margin: 20px 0;
  padding: 10px 20px;
  padding-right: 40px;

  // Esconde barra de rolagem
  &::-webkit-scrollbar {
    display: none; // Chrome e Opera
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  .no-restaurant-found-message {
    font-size: 1.6rem;  
    text-align: center;
    font-style: italic;
  }

  @media only screen and (min-width: 700px) {
    padding: 10px 50px;
    min-height: 390px;
  }

  @media only screen and (min-width: 830px) {
    padding: 10px 70px;
    gap: 40px;
  }
`;

export const NearbyCardsContainer = styled(HighlightsCardsContainer)``;

export const LoadingRestaurantContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FoodsContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  position: relative;
  min-height: 420px;
`;

export const LoadingDishesContainer = styled(LoadingRestaurantContainer)``;

export const FoodsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;

  @media only screen and (min-width: 660px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const NoFoodFoundContainer = styled.div`
  font-size: 2.0rem;
  font-style: italic;

  span {
    font-weight: bold;
  }
`;