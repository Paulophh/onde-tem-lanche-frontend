import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: ${props => props.theme.colors['light-grey']};
  box-shadow: 0px 4px 4px 0px ${props => props.theme.colors['box-shadow']};
  border-radius: 2px;
  padding: 3px;
  margin-top: 20px; 
  width: 900px;
  height: 40px;

  svg {
    color: ${props => props.theme.colors['black']};
    margin-right: 8px;
    margin-left: 8px;
  }

  input {
    border: none;
    flex: 1;
    font-size: 16px;
    color: ${props => props.theme.colors['black']};
    background-color: transparent;
    text-align: center;
  }
`;

export const Button = styled.button `

background-color: transparent;
border: none;
cursor: pointer;
transition: transform 0.2s;


&:hover {
  transform: scale(1.1);
}
`;
