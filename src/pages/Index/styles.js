import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HighlightsCardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

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

  @media only screen and (min-width: 700px) {
    padding: 10px 50px;
  }

  @media only screen and (min-width: 830px) {
    padding: 10px 70px;
    gap: 40px;
  }
`;

export const FoodsContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
`;

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
    justify-content: space-around;
  }
`;