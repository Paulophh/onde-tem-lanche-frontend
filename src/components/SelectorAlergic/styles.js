import styled from 'styled-components';

export const AlergenSelectorContainer = styled.div`
  font-family: Ubuntu;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const AlergicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
`;

export const AlergenItem = styled.label`
  display: flex;
  align-items: center;
  margin: 10px; 
  padding: 5px;
  cursor: pointer;


  input[type="checkbox"] {
    margin-right: 5px;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid #333;
    border-radius: 3px;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background-color: orange;
  }

  span {
    color: #000;
    font-family: Ubuntu;
    font-size: 2.0rem; 
    font-weight: 300;
    line-height: normal;
  }
`;
