import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { InputContainer } from "./styles";

const AddressAutoComplete = ({ value, setValue }) => {
    function handleAddressSelect(e) {
        setValue(e.label);
    }

    return (
        <InputContainer>
            <GooglePlacesAutocomplete
                selectProps={{
                    value,
                    onChange: handleAddressSelect,
                    className: 'my-input',
                    placeholder: 'Avenida Irmãos Pereira, 670'
                }}
                minLengthAutocomplete={5}
            />

        </InputContainer>
    )
}

export default AddressAutoComplete;