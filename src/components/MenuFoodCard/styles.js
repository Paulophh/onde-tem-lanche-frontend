import styled from "styled-components";

export const MenuFoodCardContainer = styled.div`
    width: 100%;
    max-width: 300px;
`;

export const ImageContainer = styled.div`
    text-align: center;

    img {
        max-width: 200px;
        object-fit: cover;
    }
`;

export const FoodInfoContainer = styled.div`
    box-shadow: 0 4px 4px 1px ${props => props.theme.colors['box-shadow']};
    border-radius: 0 0 4px 4px;

    margin-top: 5px;
    padding: 10px;
`;

export const TopRowContainer = styled.div`
    display: flex;
    gap: 8px;

    .name {
        font-size: 1.7rem;
        flex: 1;
    }

    .rating, .price {
        display: flex;
        align-items: center;
        gap: 3px;

        span {
            font-size: 1.4rem;
        }

        svg {
            margin-top: 2px;
        }

        span:first-of-type {
            color: ${props => props.theme.colors.orange};
        }
    }
`;

export const DescriptionContainer = styled.div`
    margin-top: 5px;
    font-size: 1.3rem;
    color: ${props => props.theme.colors['text-light-grey']};
`;