import styled from "styled-components";

export const OperationHoursSelectorContainer = styled.div`
    margin-top: 10px;
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
    }

    @media only screen and (min-width: 360px) {
        span, input {
            font-size: 1.5rem;
        }
    }
`;