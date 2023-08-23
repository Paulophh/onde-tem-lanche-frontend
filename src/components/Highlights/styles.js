import styled from 'styled-components';

export const HighlightsLinhas = styled.div `
position: relative;
background-color:  ${props => props.theme.colors['orange']};
width: 100%;
height: 2px;
margin-top: 30px;


`;

export const DestaquesParagrafo = styled.p`
    position: absolute; 
    font-size: 2.6rem;
    top: -1.5rem; 
    margin-left: 50px;
    background-color: ${props => props.theme.colors['white']};
 
`;