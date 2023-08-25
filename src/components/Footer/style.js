import styled from 'styled-components';

export const EstilizarFooter = styled.footer `
background-color: ${props => props.theme.colors['grey']};
width: 100%;
height: 176px;
display: flex;
align-items: center;
justify-content: center;
gap:30px;
flex-direction: column;
position: fixed; 
bottom: 0; 
`

export const Paragrafos = styled.div `
display: flex;
justify-content: space-between;
gap: 16px;
margin-top: 5px;

`

export const ParagrafosEstilizados = styled.p `
font-size: 1.0rem;
text-align: center;

`

export const Icons = styled.div `
 display: flex;
 justify-content: space-between; 
 gap: 32px;

`

export const Grupo = styled.div `
display: flex;
align-items: center;
gap: 1px;

`

export const ParagrafoFooter = styled.p `
font-size: 0.8rem;
text-align: center;
height: 0.6remg;

`

