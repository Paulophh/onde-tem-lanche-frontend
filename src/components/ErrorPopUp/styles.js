import styled, { keyframes } from "styled-components";

const appear = keyframes`
    0% {
        opacity: 0;
        top: 10px;
    }

    5%, 95% {
        opacity: 1;
        top: 20px;
    }

    100% {
        opacity: 0;
        top: 10px;
    }
`;

export const ErrorPopUpContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f34343;
    padding: 5px 20px 8px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #f34343;

    width: 100%;
    max-width: 500px;

    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    animation: ${appear} 3s forwards;
`;