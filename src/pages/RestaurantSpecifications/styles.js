import styled from "styled-components";

export const RestaurantSpecificationsContainer = styled.div``;

export const PageContentContainer = styled.div`
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
`;

export const ImageUploadContainer = styled.div`
    margin: 20px auto;
    box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};
    padding: 10px;
    max-width: 800px;

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
`;

export const StandardInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 15px 0;
`;

export const StandardInput = styled.div`
    font-size: 1.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
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
`;

export const DishOptionsContainer = styled.div`
    text-align: center;
    box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};

    margin: 30px auto 0;
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
`;

export const OperationHoursContainer = styled.div`
    padding: 10px;
    box-shadow: 0 2px 4px 0 ${props => props.theme.colors['box-shadow']};
    margin: 30px auto;
    
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
`;