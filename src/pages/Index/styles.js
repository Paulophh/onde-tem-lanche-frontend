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

  margin-top: 20px;
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