import styled from "styled-components";

export const OperationDayHourContainer = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    
    color: ${props => props.isToday ? props.theme.colors.orange : '#000'};

    span {
        font-size: 1.3rem;
    }
`;