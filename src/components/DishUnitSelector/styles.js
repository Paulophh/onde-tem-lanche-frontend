import styled from "styled-components";

export const DishUnitSelectorContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const ColumnSeparator = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputLabelContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    input, label {
        font-size: 1.4rem;
    }

    input[type="radio"] {
        appearance: none;
        width: 12px;
        height: 12px;
        border: 2px solid #333;
        border-radius: 2px;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    input[type="radio"]:checked {
        background-color: orange;
    }

    &:hover, label:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 800px) {
        input, label {
            font-size: 1.6rem;
        }
    }
`;