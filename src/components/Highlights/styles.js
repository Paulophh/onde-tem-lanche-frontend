import styled from 'styled-components';

export const HighlightsLinhas = styled.div`
    width: 100%;
    margin-top: 30px;
    border: 1px solid ${props => props.theme.colors['orange']};

    @media only screen and (min-width: 830px) {
        margin-top: 50px;
    }
`;

export const DestaquesParagrafo = styled.p` 
    font-size: 2.2rem;
    margin-top: -18px;
    background-color: ${props => props.theme.colors.white};
    width: fit-content;
    padding: 2px 10px;
    margin-left: ${props => props.placement === 'left' ? '5%' : 'auto'};
    margin-right: ${props => props.placement === 'left' ? 'auto' : '5%'};
    font-style: italic;
    font-weight: 500;

    @media only screen and (min-width: 830px) {
        font-size: 3.0rem;
        margin-top: -25px;
    }
`;