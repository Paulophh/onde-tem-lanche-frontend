import styled from "styled-components";

export const PageContentContainer = styled.div`

`;

export const CoverImageContainer = styled.div`
    width: 100vw;
    height: 125px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (min-width: 450px) {
        height: 175px;
    }
`;

export const RestaurantProfilePageContainer = styled.div`
    padding: 10px;
`;

export const PageContentHeader = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
    }

    .restaurant-info-container h1 {
        font-size: 2.0rem;
    }

    .restaurant-info-container div {
        font-size: 1.2rem;
    }
`;