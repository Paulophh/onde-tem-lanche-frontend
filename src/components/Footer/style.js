import styled from 'styled-components';

export const EstilizarFooter = styled.footer`
    background-color: ${props => props.theme.colors['grey']};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 32px;

    svg {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.orange};
    }

    & svg:nth-child(2) {
        font-size: 3rem;
    }   
`

export const Paragrafos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;

    p {
        font-size: 1.2rem;
    }
`

export const ParagrafosEstilizados = styled.p`
    font-size: 1.0rem;
    text-align: center;
`

export const Grupo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    align-items: center;

    svg {
        font-size: 1.4rem;
    }

    p {
        font-size: 1.2rem;  
    }
`;
