import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: rgba(225, 225, 225, 0.50);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 3px;
  margin-top: 20px; 
  width: 900px;
  height: 40px;
  flex-shrink: 0;
  text-align: center;

  svg {
    color: rgba(0,0,0);
    margin-right: 8px;
    text-align: center;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    color: rgba(0,0,0);
    background-color: transparent;
  }
`;
