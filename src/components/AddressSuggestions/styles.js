import styled from "styled-components";

export const AddressSuggestionsContainer = styled.ul`
    padding: 10px;
    background-color: #fff;
    position: absolute;
    z-index: 2;
    box-shadow: 0 4px 4px 1px ${props => props.theme.colors['box-shadow']};
    width: 100%;

    li:last-child {
        border-bottom: none;
    }
`;

export const AddressSuggestionsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;

    span {
        font-size: 1.2rem;
    }

    button {
        font-size: 1.2rem;
        border: none;
        background-color: transparent;
    }

    button:hover {
        cursor: pointer;
    }
`;

export const Suggestion = styled.li`
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid #dedede;
    padding: 10px 0;

    &:hover {
        cursor: pointer;
    }
`;