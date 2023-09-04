import { AiOutlineClose } from 'react-icons/ai';

import { AddressSuggestionsContainer, AddressSuggestionsHeader, Suggestion } from "./styles";

const AddressSuggestions = ({ suggestionsList, onSelect, isShown }) => {
    function handleSelect(suggestion) {
        onSelect(suggestion.address_components[0].long_name)
    }

    return (
        <AddressSuggestionsContainer>
            <AddressSuggestionsHeader>
                <span>
                    Sugestões
                </span>

                <button onClick={() => isShown(false)}>
                    <AiOutlineClose />
                </button>
            </AddressSuggestionsHeader>

            {
                suggestionsList.map(suggestion => {
                    return (
                        <Suggestion key={suggestion.formatted_address} onClick={() => handleSelect(suggestion)}>
                            {suggestion.formatted_address}
                        </Suggestion>
                    )
                })
            }
        </AddressSuggestionsContainer>
    )
}

export default AddressSuggestions;