import styled from "styled-components";

export const OperationHoursSelectorContainer = styled.div`
    margin-top: 20px; 

    @media only screen and (min-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
`;

export const TopRowContainer = styled.div`
    @media only screen and (min-width: 800px) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 40px;
    }
`;

export const ColumnContainer = styled.div`
    @media only screen and (min-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`;

export const DayAndHourContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 10px;
`;

export const WeekDayContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    label {
        font-size: 1.3rem;
    }

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

  @media only screen and (min-width: 360px) {
    label {
        font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 700px) {
    label {
        font-size: 1.7rem;
    }
  }
`;

export const HoursContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    span {
        font-size: 1.3rem;
    }

    input {
        width: 30px;
        font-size: 1.3rem;
        border: none;
        border-bottom: 1px solid black;
        text-align: end;

        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }       

        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
        }
    }

    @media only screen and (min-width: 360px) {
        span, input {
            font-size: 1.5rem;
        }
    }

    @media only screen and (min-width: 700px) {
        span, input {
            font-size: 1.7rem;
        }
    }
`;