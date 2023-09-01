import styled from 'styled-components';

export const AllergySelectorContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  gap: 15px;

  @media only screen and (min-width: 420px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ColumnDivisor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 185px;

  @media only screen and (min-width: 522px) and (max-width: 695px) {
    &:last-of-type {
      flex-direction: row;
      width: 100%;
      justify-content: center;

      label {
        width: 140px;
      }
    }
  }
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
