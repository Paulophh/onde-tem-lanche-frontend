import React from 'react';
import { InputContainer, SearchBarContainer } from './styles';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoMdOptions } from 'react-icons/io'
import { Button } from './styles';

const SearchBar = ({ value, setFilterInput, handleFilterRestaurants, clearInputAndResetFilter }) => {

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setFilterInput(inputValue);
  }

  return (
    <SearchBarContainer onSubmit={handleFilterRestaurants}>
      <Button>
        <IoMdOptions size={20} />
      </Button>

      <InputContainer>
        <input
          placeholder=" Busque por restaurantes ou pratos"
          value={value}
          onChange={handleInputChange}
        />

        {
          value &&
          <button onClick={clearInputAndResetFilter}>
            <AiOutlineClose />
          </button>
        }
      </InputContainer>

      <Button>
        <AiOutlineSearch size={20} />
      </Button>
    </SearchBarContainer>
  );
}

export default SearchBar;