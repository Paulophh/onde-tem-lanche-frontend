import styled from 'styled-components';

export const HighlightsCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  max-width: 100vw;
  overflow-x: scroll;

  margin: 20px 0;
  padding: 10px 20px;
  padding-right: 40px;

  /* Esconde a barra de rolagem */
  &::-webkit-scrollbar {
    display: none; // Chrome e Opera
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media only screen and (min-width: 700px) {
    padding: 10px 50px;
  }

  @media only screen and (min-width: 830px) {
    padding: 10px 70px;
    gap: 40px;
  }
`;

export const CardFavorites = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

export const NoFavotites = styled.div`
  padding: 60px;
`;

export const TextLiked = styled.p`
  color: rgba(0, 0, 0, 0.50);
  font-family: Ubuntu;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  padding: 10px;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  padding: 10px;
`;