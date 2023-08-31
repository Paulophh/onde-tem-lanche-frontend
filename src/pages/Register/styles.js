import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const MidSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;
    flex: 1;
`;

export const FormContainer = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;

    width: 90vw;
    max-width: 400px;

    .inputs-container {
        gap: 20px;  
        display: flex;
        flex-direction: column;
    }

    .bottom-container {
        margin: 30px 0;
    }
`;

export const RedirectToRegisterContainer = styled.div`
    text-align: center;
    margin-top: 20px;

    span {
        font-size: 1.6rem;
        margin-right: 5px;
    }

    a {
        font-size: 1.6rem;
        font-weight: bold;
        color: ${props => props.theme.colors.orange};
    }

    a:hover {
        text-decoration: underline;
    }
`;