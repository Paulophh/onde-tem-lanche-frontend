import styled from "styled-components";

export const RestaurantProfileContainer = styled.div`

`;

export const CoverContainer = styled.div`
    border-top: 2px solid ${props => props.theme.colors.orange};
    border-bottom: 2px solid ${props => props.theme.colors.orange};
    box-shadow: 0 4px 8px 1px ${props => props.theme.colors['box-shadow']};

    background-image: linear-gradient(to bottom, #ff8000, #df8d23);
    text-align: center;

    img {
        width: 100%;
        object-fit: cover;
        max-height: 150px;
        max-width: 1300px;
    }
`;

export const RestaurantContentContainer = styled.div`
    position: relative;
    z-index: 3;
`;

export const RestaurantContentHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    width: 90vw;
    padding: 10px;    
    max-width: 900px;
    margin: -40px auto 0;

    background-color: #fff;
    box-shadow: 0 4px 8px 1px ${props => props.theme.colors['box-shadow']};

    @media only screen and (min-width: 650px) {
        flex-wrap: nowrap;
        margin: -80px auto 0;
    }
`;

export const LogoContainer = styled.div`
    text-align: center;

    img {
        width: 100%;
        max-width: 100px;
        object-fit: cover;
    }
`;

export const TitleDescription = styled.div`
    width: 100%;
    margin-top: 10px;
    
    border-top: 1px solid ${props => props.theme.colors['box-shadow']};
    padding-top: 10px;

    h1 {
        font-size: 2.2rem;
        text-align: center;
    }

    div {
        font-size: 1.3rem;
        margin-top: 5px;
        text-align: justify;
    }

    @media only screen and (min-width: 650px) {
        width: auto;
        flex: 0.9;
        order: 1;

        margin-top: 0;
        padding-top: 0;
        border-top: none;

        h1 {
            font-size: 2.6rem;
        }

        div {
            margin-top: 15px;
            font-size: 1.5rem;
        }
    }
`;

export const EditRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;

    svg {
        font-size: 2.0rem;
        color: ${props => props.theme.colors.orange};
    }

    > span + span {
        font-size: 1.2rem;
        color: #fff;
        background-color: #FFA800;
        padding: 2px 5px;
        border-radius: 5px;
    }

    @media only screen and (min-width: 650px) {
        order: 2;
    }
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 5px;

    font-size: 1.3rem;

    svg {
        color: ${props => props.theme.colors.orange};
        margin-top: 2px;
    }
`;

export const ImagesContainer = styled.div`
    margin: 20px auto;
    width: 90vw;
    max-width: 900px;

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

    img {
        width: 130px;
    }

    @media only screen and (min-width: 700px) {
        width: calc((100% - 45px)/4);

        img {
            width: 100%;
        }
    }
`;

export const AddImageButton = styled.button`
    border: none;
    background-color: transparent;
    box-shadow: 0px 0px 4px 1px ${props => props.theme.colors['box-shadow']};

    border-radius: 50%;

    padding: 10px;
    width: 130px;
    height: 130px;

    img {
        width: 110px;
        height: 110px;
    }

    @media only screen and (min-width: 700px) {
        width: calc((100% - 50px)/4);
        height: 90%;

        img {
            width: 90%;
            height: 100%;
        }
    }
`;

export const AddressHoursContainer = styled.div`
    margin: 20px auto;
    width: 90vw;
    max-width: 900px;


    .address-container {
        text-align: center;
        font-size: 1.3rem;

        margin-bottom: 10px;
    }

    .hours-container {
        display: flex;
        gap: 5px;

        > svg {
            font-size: 4.0rem;
            color: ${props => props.theme.colors.orange};
        }

        div {
            font-size: 1.2rem;
            display: flex;
            flex-wrap: wrap;
            row-gap: 5px;
            column-gap: 2px;
        }
    }

    @media only screen and (min-width: 700px) {
        display:flex;
        justify-content: space-between;

        .address-container {
            flex-basis: 70%;
            text-align: start;
        }

        .hours-container {
            justify-content: flex-end;
        }
    }
`;

export const OrangeDivider = styled.div`
    border: 1px solid ${props => props.theme.colors.orange};
    margin: 10px 0;
`;