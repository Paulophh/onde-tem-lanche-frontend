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