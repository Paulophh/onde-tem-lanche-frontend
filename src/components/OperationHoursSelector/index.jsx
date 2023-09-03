import { DayAndHourContainer, HoursContainer, OperationHoursSelectorContainer, WeekDayContainer } from "./styles";

const OperationHoursSelector = () => {
    const operationHours = []

    function toggleOperationHour(value) {
        console.log('Selecionou -> ', value);
    }

    return (
        <OperationHoursSelectorContainer>
            <DayAndHourContainer>
                <WeekDayContainer>
                    <input
                        type='checkbox'
                        id='monday-selector'
                        value='Segunda-feira'
                        onChange={() => toggleOperationHour('Segunda-Feira')}
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
                    />

                    <span> horas </span>
                </HoursContainer>
            </DayAndHourContainer>

            <DayAndHourContainer>
                <WeekDayContainer>
                    <input
                        type='checkbox'
                        id='thursday-selector'
                        value='Quinta-Feira'
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
                    />

                    <span> horas </span>
                </HoursContainer>
            </DayAndHourContainer>

            <DayAndHourContainer>
                <WeekDayContainer>
                    <input
                        type='checkbox'
                        id='sunday-selector'
                        value='Domingo'
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
                    />

                    <span className='to'> às </span>

                    <input
                        type='number'
                        placeholder='22'
                    />

                    <span> horas </span>
                </HoursContainer>
            </DayAndHourContainer>
        </OperationHoursSelectorContainer>
    )
}

export default OperationHoursSelector;