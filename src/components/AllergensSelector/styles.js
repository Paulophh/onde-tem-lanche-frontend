import styled from 'styled-components';

export const AllergySelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 30px auto 0;

  gap: 20px;

  @media only screen and (min-width: 460px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (min-width: 620px) {
    gap: 40px;
  }
`;

export const ColumnDivisor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Allergy = styled.label`
  display: flex;
  align-items: center; 
  gap: 10px;
  cursor: pointer;

  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid #333;
    border-radius: 2px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background-color: orange;
  }

  span {
    font-size: 1.7rem; 
    font-weight: 300;
  }
`;
