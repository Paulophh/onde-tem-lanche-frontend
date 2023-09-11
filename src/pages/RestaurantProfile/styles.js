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

export const LogoContainer = styled.label`
    text-align: center;
    border: none;
    border-radius: 50%;

    img {
        width: 100%;
        max-width: 100px;
        object-fit: cover;
        border-radius: 50%;
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

export const AddressHoursContainer = styled.div`
    margin: 20px auto;
    width: 90vw;
    max-width: 900px;


    .address-container {
        
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

        .hours {
            font-size: 1.2rem;
            display: flex;
            flex-wrap: wrap;
            row-gap: 5px;
            column-gap: 2px;
            flex: 1;
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
            flex-basis: 60%;
        }
    }
`;

export const OrangeDivider = styled.div`
    border: 1px solid ${props => props.theme.colors.orange};
    margin: 10px 0;
`;

export const DishesTitle = styled.h2`
    text-align: center;
    font-size: 2.2rem;
`;

export const MenuContainer = styled.div`
    margin: 20px auto;
    width: 90vw;
    max-width: 1000px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .no-dishes-message {
        font-size: 1.4rem;
        text-align: center;
        font-style: italic;
    }

    @media only screen and (min-width: 700px) {
        justify-content: flex-start;
    }
`;

export const EmptyMenuList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
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

export const AddDishButton = styled.button`
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