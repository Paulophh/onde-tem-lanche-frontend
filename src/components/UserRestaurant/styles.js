import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; 
`;

export const OptionsContainer = styled.div`
  display: flex;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Option = styled.div`
  font-size: 3.2rem;
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ isSelected }) => (isSelected ? 'orange' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;