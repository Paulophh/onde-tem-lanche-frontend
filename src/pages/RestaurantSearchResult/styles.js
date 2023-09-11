import styled from "styled-components";

export const RestaurantSearchResultContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const PageContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    margin-bottom: 20px;

    .loading {
        width: 100vw;
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cdcdcd;
    }

    .restaurant-list-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .no-nearby-restaurant {
        text-align: center;
        font-size: 1.5rem;
        font-style: italic;
    }
`;