import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const MidSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    margin: 30px 0;

    .entity-selector-container {
        font-size: 2.0rem;
        margin-bottom: 20px;
        color: ${props => props.theme.colors['text-light-grey']};
        text-align: center;
    }
`;

export const FormContainer = styled.form`
    width: 90vw;
    max-width: 400px;
    margin: 30px 0;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .inputs-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    button {
        padding: 5px 10px;
        font-size: 1.8rem;
        border-radius: 4px;
        border: none;
        transition: .2s;
        box-shadow: 0 2px 4px 1px ${props => props.theme.colors['box-shadow']};
        
        color: ${props => props.isLoading ? '#000' : props.theme.colors.orange};
        background-color: ${props => props.isLoading ? props.theme.colors.grey : 'transparent'};
        text-align: center;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 105px;
    }
    
    button:hover {
        cursor: ${props => props.isLoading ? 'not-allowed' : 'pointer'};
        box-shadow: 0 2px 8px 2px ${props => props.theme.colors['box-shadow']};
    }

    button:active {
        transform: scale(.9);
    }

    .bottom-container {  
        text-align: center;
        margin-top: 30px;
    }
`;

export const RedirectToRegisterContainer = styled.div`
    text-align: center;
    margin-top: 20px;

    span, a {
        font-size: 1.6rem;
    }

    span:first-of-type {
        margin-right: 5px;
    }

    a {
        font-weight: bold;
        color: ${props => props.theme.colors.orange};
    }

    a:hover {
        text-decoration: underline;

    }
`;