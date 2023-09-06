import styled from "styled-components";

export const RestaurantSpecificationsContainer = styled.div``;

export const PageContentContainer = styled.form`
    margin: 30px auto 0;
    padding-bottom: 20px;
    width: 90vw;
    max-width: 1000px;

    .title {
        font-size: 1.8rem;
        text-align: center;
    }

    .sub-title {
        font-size: 1.3rem;
        margin-top: 7px;
        text-align: center;
    }

    @media only screen and (min-width: 700px) {
        .title {
            font-size: 2.1rem;
        }

        .sub-title {
            font-size: 1.6rem;
        }
    }
`;

export const ImageUploadContainer = styled.div`
    margin: 20px auto;
    box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};
    padding: 10px;
    max-width: 550px;

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    label span {
        font-size: 1.2rem;
        text-align: center;
    }

    img {
        width: 150px;
    }

    @media only screen and (min-width: 700px) {
        img {
            width: 250px;
        }

        label span {
            font-size: 1.6rem;
            margin-top: 10px;
        }
    }
`;

export const StandardInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 15px auto;
    width: 100%;
    max-width: 350px;

    .bottom-row-container {
        width: 100%;
    }

    @media only screen and (min-width: 700px) {
        max-width: 100%;
        align-items: center;
        flex-direction: row;
        justify-content: center;

        > div:first-of-type {
            flex: 1;
        }

        .bottom-row-container {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

`;

export const StandardInput = styled.div`
    font-size: 1.5rem;
    width: 100%;
    position: relative;

    .input-label-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .required {
        margin-left: 4px;
        color: red;
    }

    input {
        border: none;
        padding: 5px 10px;
        box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};
        position: relative;
    }
    
    input::placeholder {
        color: ${props => props.theme.colors['text-light-grey']};
        font-size: 1.4rem;
    }

    .input-error-message {
        color: red;
        text-align: center;
        font-size: italic;
        font-size: 1.2rem;
        margin-top: 4px;
    }

    @media only screen and (min-width: 700px) {
        width: fit-content;

        .input-label-container {
            justify-content: flex-start;
            gap: 15px;
        }

        .input-label-address {
            flex: 1;

            input {
                flex: 1;
            }
        }
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;

    box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};

    label {
        font-size: 1.6rem;
    }

    textarea {
        font-size: 1.4rem;
        border: 0;
        flex: 1;
        width: 100%;
        height: 300px;
        resize: none;
    }

    textarea::placeholder {
        text-align: center;
    }

    .input-error-message {
        color: red;
        text-align: center;
        font-size: italic;
        font-size: 1.2rem;
        margin-top: 4px;
    }

    @media only screen and (min-width: 700px) {
        gap: 25px;
        
        label {
            font-size: 2.0rem;
        }

        textarea {
        font-size: 1.7rem;
    }
    }
`;

export const DishOptionsContainer = styled.div`
    text-align: center;
    box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};

    margin: 30px auto 20px;
    padding: 10px;

    .title {
        font-size: 1.8rem;
        text-align: center;
    }

    .required {
        margin-left: 4px;
        color: red;
    }

    .sub-title {
        font-size: 1.3rem;
        margin-top: 7px;
        text-align: center;
    }

    @media only screen and (min-width: 700px) {
        .title {
            font-size: 2.1rem;
        }

        .sub-title {
            font-size: 1.6rem;
        }
    }
`;