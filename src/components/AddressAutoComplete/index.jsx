import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { InputContainer } from "./styles";
import { useState } from 'react';

const AddressAutoComplete = ({ value, setValue }) => {
    const [inputValue, setInputValue] = useState(value);

    function handleAddressSelect(e) {
        setInputValue(e.label);
        setValue(e.label);
    }

    return (
        <InputContainer>
            <GooglePlacesAutocomplete
                selectProps={{
                    value: inputValue,
                    onChange: handleAddressSelect,
                    className: 'my-input',
                    placeholder: inputValue.length > 0 ? inputValue : 'Avenida Irmãos Pereira, 670'
                }}
                minLengthAutocomplete={5}
            />

        </InputContainer>
    )
}

export default AddressAutoComplete;