import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: ${props => props.theme.colors['light-grey']};
  box-shadow: 0px 4px 4px 0px ${props => props.theme.colors['box-shadow']};
  border-radius: 2px;
  padding: 10px;
  margin: 20px auto 0; 
  width: 90vw;
  max-width: 900px;

  svg {
    color: ${props => props.theme.colors['black']};
  }

  input {
    border: none;
    flex: 1;
    font-size: 1.4rem;
    color: ${props => props.theme.colors['black']};
    background-color: transparent;
    text-align: center;
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
