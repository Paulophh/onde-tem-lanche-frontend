import styled from "styled-components";

export const LoginAndRegisterInputContainer = styled.div`
`;

export const InputContainer = styled.div`
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
    padding: 10px;
    border-radius: 5px;

    display: flex;
    gap: 10px;
    align-items: center;

    span svg {
        color: rgba(0, 0, 0, 0.25);
        font-size: 1.8rem;
    }

    input {
        color: rgba(0, 0, 0, 0.75);
        font-size: 1.6rem;
        border: none;
        flex: 1;
    }

    & input::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }

    @media only screen and (min-width: 400px) {
        gap: 20px;
    }
`;

export const InputErrorContainer = styled.div`
    color: red;
    font-size: 1.4rem;
    font-style: italic;

    margin-top: 8px;
    text-align: center;
`;