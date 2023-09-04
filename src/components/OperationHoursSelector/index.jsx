import { ColumnContainer, DayAndHourContainer, HoursContainer, OperationHoursSelectorContainer, TopRowContainer, WeekDayContainer } from "./styles";

const OperationHoursSelector = ({ operationHours, setOperationHours }) => {

    function toggleOperationHour(dayId) {
        const updatedOperationHours = operationHours.map(day =>
            day.id === dayId ? { ...day, selected: !day.selected } : day
        );

        setOperationHours(updatedOperationHours);
    }

    function updateOpeningTime(time, dayId) {
        const updatedOperationHours = operationHours.map(day =>
            day.id === dayId ? { ...day, opens_at: Number(time) } : day
        );

        setOperationHours(updatedOperationHours);
    }

    function updateClosingTime(time, dayId) {
        const updatedOperationHours = operationHours.map(day =>
            day.id === dayId ? { ...day, closes_at: Number(time) } : day
        );

        setOperationHours(updatedOperationHours);
    }

    return (
        <OperationHoursSelectorContainer>
            <TopRowContainer>
                <ColumnContainer>
                    <DayAndHourContainer>
                        <WeekDayContainer>
                            <input
                                type='checkbox'
                                id='monday-selector'
                                value='Segunda-feira'
                                onChange={() => toggleOperationHour('monday')}
                            />

                            <label htmlFor='monday-selector'>
                                Segunda-Feira
                            </label>
                        </WeekDayContainer>

                        <HoursContainer>
                            <span className='from'> das </span>
                            <input
                                type='number'
                                placeholder='09'
                                onChange={(e) => updateOpeningTime(e.target.value, 'monday')}
                            />

                            <span className='to'> às </span>
                            <input
                                type='number'
                                placeholder='22'
                                onChange={(e) => updateClosingTime(e.target.value, 'monday')}
                            />

                            <span> horas </span>
                        </HoursContainer>
                    </DayAndHourContainer>

                    <DayAndHourContainer>
                        <WeekDayContainer>
                            <input
                                type='checkbox'
                                id='tuesday-selector'
                                value='Terça-Feira'
                                onChange={() => toggleOperationHour('tuesday')}
                            />

                            <label htmlFor='tuesday-selector'>
                                Terça-Feira
                            </label>
                        </WeekDayContainer>

                        <HoursContainer>
                            <span className='from'> das </span>
                            <input
                                type='number'
                                placeholder='09'
                                onChange={(e) => updateOpeningTime(e.target.value, 'tuesday')}
                            />

                            <span className='to'> às </span>
                            <input
                                type='number'
                                placeholder='22'
                                onChange={(e) => updateClosingTime(e.target.value, 'tuesday')}
                            />

                            <span> horas </span>
                        </HoursContainer>
                    </DayAndHourContainer>

                    <DayAndHourContainer>
                        <WeekDayContainer>
                            <input
                                type='checkbox'
                                id='wednesday-selector'
                                value='Quarta-Feira'
                                onChange={() => toggleOperationHour('wednesday')}
                            />

                            <label htmlFor='wednesday-selector'>
                                Quarta-Feira
                            </label>
                        </WeekDayContainer>

                        <HoursContainer>
                            <span className='from'> das </span>
                            <input
                                type='number'
                                placeholder='09'
                                onChange={(e) => updateOpeningTime(e.target.value, 'wednesday')}
                            />

                            <span className='to'> às </span>
                            <input
                                type='number'
                                placeholder='22'
                                onChange={(e) => updateClosingTime(e.target.value, 'wednesday')}
                            />

                            <span> horas </span>
                        </HoursContainer>
                    </DayAndHourContainer>
                </ColumnContainer>

                <ColumnContainer>
                    <DayAndHourContainer>
                        <WeekDayContainer>
                            <input
                                type='checkbox'
                                id='thursday-selector'
                                value='Quinta-Feira'
                                onChange={() => toggleOperationHour('thursday')}
                            />

                            <label htmlFor='thursday-selector'>
                                Quinta-Feira
                            </label>
                        </WeekDayContainer>

                        <HoursContainer>
                            <span className='from'> das </span>
                            <input
                                type='number'
                                placeholder='09'
                                onChange={(e) => updateOpeningTime(e.target.value, 'thursday')}
                            />

                            <span className='to'> às </span>
                            <input
                                type='number'
                                placeholder='22'
                                onChange={(e) => updateClosingTime(e.target.value, 'thursday')}
                            />

                            <span> horas </span>
                        </HoursContainer>
                    </DayAndHourContainer>

                    <DayAndHourContainer>
                        <WeekDayContainer>
                            <input
                                type='checkbox'
                                id='friday-selector'
                                value='Sexta-feira'
                                onChange={() => toggleOperationHour('friday')}
                            />

                            <label htmlFor='friday-selector'>
                                Sexta-Feira
                            </label>
                        </WeekDayContainer>

                        <HoursContainer>
                            <span className='from'> das </span>
                            <input
                                type='number'
                                placeholder='09'
                                onChange={(e) => updateOpeningTime(e.target.value, 'friday')}
                            />

                            <span className='to'> às </span>
                            <input
                                type='number'
                                placeholder='22'
                                onChange={(e) => updateClosingTime(e.target.value, 'friday')}
                            />

                            <span> horas </span>
                        </HoursContainer>
                    </DayAndHourContainer>

                    <DayAndHourContainer>
                        <WeekDayContainer>
                            <input
                                type='checkbox'
                                id='saturday-selector'
                                value='Sábado'
                                onChange={() => toggleOperationHour('saturday')}
                            />

                            <label htmlFor='saturday-selector'>
                                Sábado
                            </label>
                        </WeekDayContainer>

                        <HoursContainer>
                            <span className='from'> das </span>
                            <input
                                type='number'
                                placeholder='09'
                                onChange={(e) => updateOpeningTime(e.target.value, 'saturday')}
                            />

                            <span className='to'> às </span>
                            <input
                                type='number'
                                placeholder='22'
                                onChange={(e) => updateClosingTime(e.target.value, 'saturday')}
                            />

                            <span> horas </span>
                        </HoursContainer>
                    </DayAndHourContainer>
                </ColumnContainer>
            </TopRowContainer>

            <ColumnContainer>
                <DayAndHourContainer>
                    <WeekDayContainer>
                        <input
                            type='checkbox'
                            id='sunday-selector'
                            value='Domingo'
                            onChange={() => toggleOperationHour('sunday')}
                        />

                        <label htmlFor='sunday-selector'>
                            Domingo
                        </label>
                    </WeekDayContainer>

                    <HoursContainer>
                        <span className='from'> das </span>
                        <input
                            type='number'
                            placeholder='09'
                            onChange={(e) => updateOpeningTime(e.target.value, 'sunday')}
                        />

                        <span className='to'> às </span>
                        <input
                            type='number'
                            placeholder='22'
                            onChange={(e) => updateClosingTime(e.target.value, 'sunday')}
                        />

                        <span> horas </span>
                    </HoursContainer>
                </DayAndHourContainer>
            </ColumnContainer>
        </OperationHoursSelectorContainer>
    )
}

export default OperationHoursSelector;