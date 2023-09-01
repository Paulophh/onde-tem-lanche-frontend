import styled from 'styled-components';

export const Description = styled.div`
  text-align: center;
  margin-top: 34px;
  color: #000;
  font-size: 2.0rem;

  @media only screen and (min-width: 900px) {
    font-size: 2.4rem;
  }
`;

export const PreferencesCard = styled.div`
  width: 90vw;
  max-width: 1080px;
  border-radius: 0px 0px 2px 2px;
  background: #FFF;
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 45px auto;
  padding: 10px;

  text-align: center;

  h1, h2 {
    color: ${props => props.theme.colors['text-light-grey']};
    font-size: 1.8rem;
    font-weight: 300;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 15px;
  }

  @media only screen and (min-width: 900px) {
    h1, h2 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const AllergiesCard = styled(PreferencesCard)`
`;