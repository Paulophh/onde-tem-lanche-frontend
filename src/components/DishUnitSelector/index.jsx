import { ColumnSeparator, DishUnitSelectorContainer, InputLabelContainer } from "./styles";

const DishUnitSelector = ({ handleSelectUnit }) => {

    return (
        <DishUnitSelectorContainer>
            <ColumnSeparator>
                <InputLabelContainer>
                    <input type="radio" id="ml" name="dish_options" value="ml" onChange={handleSelectUnit} />
                    <label htmlFor="ml"> ml </label>
                </InputLabelContainer>

                <InputLabelContainer>
                    <input type="radio" id="l" name="dish_options" value="L" onChange={handleSelectUnit} />
                    <label htmlFor="l"> L </label>
                </InputLabelContainer>
            </ColumnSeparator>

            <ColumnSeparator>
                <InputLabelContainer>
                    <input type="radio" id="pedaços" name="dish_options" value="pedaços" onChange={handleSelectUnit} />
                    <label htmlFor="pedaços"> Pedaços </label>
                </InputLabelContainer>

                <InputLabelContainer>
                    <input type="radio" id="g" name="dish_options" value="g" onChange={handleSelectUnit} />
                    <label htmlFor="g"> g </label>
                </InputLabelContainer>
            </ColumnSeparator>

            <ColumnSeparator>
                <InputLabelContainer>
                    <input type="radio" id="kg" name="dish_options" value="kg" onChange={handleSelectUnit} />
                    <label htmlFor="kg"> kg </label>
                </InputLabelContainer>

                <InputLabelContainer>
                    <input type="radio" id="unidades" name="dish_options" value="unidades" onChange={handleSelectUnit} />
                    <label htmlFor="unidades"> Unidades </label>
                </InputLabelContainer>
            </ColumnSeparator>
        </DishUnitSelectorContainer>
    )
}

export default DishUnitSelector;