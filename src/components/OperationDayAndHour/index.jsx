import { BsDot } from 'react-icons/bs';
import { OperationDayHourContainer } from './styles';


const OperationDayAndHour = ({ dayInfo }) => {
    const dayAbbreviation = dayInfo.day.substring(0, 3);

    const todayIndex = new Date().getDay();
    const isToday = todayIndex === dayInfo.order;


    return (
        <OperationDayHourContainer isToday={isToday}>
            <span>
                <BsDot />
            </span>

            <span>
                {dayAbbreviation}
            </span>

            <span>
                {dayInfo.opens_at}h
            </span>

            <span>
                -
            </span>

            <span>
                {dayInfo.closes_at}h
            </span>
        </OperationDayHourContainer>
    )
}

export default OperationDayAndHour;