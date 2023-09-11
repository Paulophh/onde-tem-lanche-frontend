import { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { InputContainer } from "./styles";

import { geocodeApi } from '../../services/geocode-api';
import { useAuthContext } from '../../contexts/AuthContext';

const AddressAutoComplete = ({ value, setValue }) => {
    const [inputValue, setInputValue] = useState(value);

    const geocodeApiKey = process.env.REACT_APP_GEOCODE_API_KEY;
    const { userCoordinates } = useAuthContext();

    function handleAddressSelect(e) {
        setInputValue(e.label);
        setValue(e.label);
    }

    async function getAddressFromCoordinate({ lat, lng }) {
        try {
            const response = await geocodeApi.get(`/json?latlng=${lat},${lng}&key=${geocodeApiKey}`);
            setInputValue(response.data.results[0].formatted_address ?? null);
        } catch (error) {
            setInputValue(null);
        }
    }

    useEffect(() => {
        if (userCoordinates) {
            getAddressFromCoordinate({
                lat: userCoordinates.lat,
                lng: userCoordinates.lng
            });
        }
    })

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