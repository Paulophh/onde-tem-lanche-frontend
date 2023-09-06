import styled from "styled-components";

export const SubmitButtonsContainer = styled.button`
    padding: 5px 10px;
    font-size: 1.8rem;
    border-radius: 4px;
    border: none;
    transition: .2s;
    box-shadow: 0 2px 4px 1px ${props => props.theme.colors['box-shadow']};
    
    color: ${props => props.theme.colors.orange};
    background-color: transparent;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: fit-content;
    min-width: 135px;
    
    
    &:hover {
        cursor: pointer;
        box-shadow: 0 2px 8px 2px ${props => props.theme.colors['box-shadow']};
    }

    &:active {
        transform: scale(.9);
    }

    &:disabled {
        background-color: ${props => props.theme.colors.grey};
        color: #000;
        cursor: not-allowed
    }

    &:disabled:hover {
        box-shadow: 0 2px 4px 1px ${props => props.theme.colors['box-shadow']};
    }

    &:disabled:active {
        transform: scale(1);
    }
`;