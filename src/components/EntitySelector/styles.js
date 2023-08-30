import styled from "styled-components";

/*
    w - restaurante - 120px;
    w - cliente - 78px
*/

export const EntitySelectorContainer = styled.div`
    padding: 8px;
    box-shadow: 0 0 10px 0 ${props => props.theme.colors['grey']};
    position: relative;
    display: flex;
    gap: 5px;
    width: fit-content;
    margin: 30px auto 0;

    border-radius: 8px;

    &::before {
        content: '';
        position: absolute;
        display: block;
        height: 20px;
        background-color: ${props => props.theme.colors.orange};
        box-shadow: 0 0 15px 0 ${props => props.theme.colors['grey']};
        height: 32px;
        z-index: -1;
        border-radius: 8px;
        top: 8px;
        left: 8px;
        transform: ${props => props.selectedEntity === 'restaurante' ? 'translateX(0)' : 'translateX(125px)'};

        
        width: ${props => props.selectedEntity === 'restaurante' ? '120px' : '78px'};
        transition: .5s;
    }

    .entity {
        border: none;
        font-size: 1.8rem;
        padding: 5px 10px;
        border-radius: 8px;
        height: 32px;
        background-color: transparent;
    }

    .entity:hover {
        cursor: pointer;
    }

    .entity-restaurant {
        width: 120px;
    }

    .entity-customer {
        width: 78px;
    }
`;