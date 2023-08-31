import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px 20px 10px;
  margin-top: 20px;

  width: 100vw;
  max-width: 1200px;

  overflow-x: scroll;

  @media only screen and (min-width: 580px) {
    justify-content: center;
    margin: 20px auto 0;
    padding: 10px;
    overflow-x: auto;
  }
`;

export const Category = styled.div`
  width: fit-content;
  padding: 10px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: .2s;

  border-color: ${props =>
    props.isSelected ?
      props.theme.colors.orange :
      '#ddd'
  };

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const CategoryIcon = styled.div`
  text-align: center;

  img {
    width: 35px;
    color: ${props => props.isSelected ? props.theme.colors.orange : '#000'};
    margin-top: ${props => props.isSelected ? '-5px' : 0};
    margin-bottom: ${props => props.isSelected ? '5px' : 0};
  }
`;

export const CategoryTitle = styled.div`
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
`