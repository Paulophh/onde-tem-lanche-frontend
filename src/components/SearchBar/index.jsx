import React from 'react';
import { InputContainer, SearchBarContainer } from './styles';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoMdOptions } from 'react-icons/io'
import { Button } from './styles';

const SearchBar = ({ value, setFilterInput }) => {

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setFilterInput(inputValue);
  }

  function clearInput() {
    setFilterInput('');
  }

  return (
    <SearchBarContainer>
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
          <button onClick={clearInput}>
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