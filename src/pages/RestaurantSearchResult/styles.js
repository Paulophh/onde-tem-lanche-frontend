import styled from "styled-components";

export const RestaurantSearchResultContainer = styled.div`
    min-width: 100vh;
    display: flex;
    flex-direction: column;
`;

export const PageContentContainer = styled.div`
    flex: 1;
    padding: 15px 0;
    margin-bottom: 20px;

    .restaurant-list-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;