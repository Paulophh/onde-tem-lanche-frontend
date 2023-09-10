import styled from "styled-components";

export const RestaurantImagesContainer = styled.div``;

export const ImagesContainer = styled.div`
    margin: 20px auto;
    width: 90vw;
    max-width: 900px;
    padding: 15px 0;

    display: flex;
    gap: 15px;
    overflow-x: scroll;
    align-items: center;

    &::-webkit-scrollbar {
        display: none; // Chrome e Opera
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    .no-images-message {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 700px) {
        overflow: hidden;
    }
`;

export const RestaurantImage = styled.div`
    width: 130px;
    position: relative;

    img {
        width: 130px;
    }

    button {
        border: none;
        background-color: #ff4d4d;
        color: white;
        border-radius: 50%;
        font-size: 1.0rem;
        width: 15px;
        height: 15px;
        text-align: center;
        padding-top: 1px;

        position: absolute;
        top: -5px;
        right: -5px;
        
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        transform: scale(.9);
    }

    @media only screen and (min-width: 700px) {
        width: calc((100% - 45px)/4);

        img {
            width: 100%;
        }
    }
`;

export const AddImageButton = styled.label`
    border: none;
    background-color: transparent;
    
    .image-container {
        width: 100px;
        padding: 10px;
        margin: 5px;
        border-radius: 50%;
        box-shadow: 0px 0px 4px 1px ${props => props.theme.colors['box-shadow']};
    }

    img {
        width: 80px;
        height: 80px;
    }

    span {
        display: block;
        text-align: center;
        font-size: 1.3rem;
    }

    &:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 700px) {
        .image-container {
            width: 120px;
        }

        img {
            width: 100px;
            height: 100px;
        }
    }
`;

export const SubmitImagesContainer = styled.div`
    text-align: center;

    button {
        border: 2px solid ${props => props.theme.colors.orange};
        background-color: transparent;
        padding: 5px 15px;
        width: 125px;
        color: ${props => props.theme.colors.orange};
        border-radius: 8px;
    }

    button:hover {
        background-color: ${props => props.theme.colors.orange};
        color: #fff;
        cursor: pointer;
    }

    button:disabled {
        background-color: ${props => props.theme.colors.grey};
        color: #000;
        cursor: not-allowed;

        div {
            margin: 0 auto;
        }
    }

    &:disabled:hover {
        box-shadow: 0 2px 4px 1px ${props => props.theme.colors['box-shadow']};
    }

    &:disabled:active {
        transform: scale(1);
    }
`;