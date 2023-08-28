import React from 'react';
import { SearchBarContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdOptions } from 'react-icons/io'
import { Button } from './styles';

const BarraDeBusca = () => {
  return (
    <SearchBarContainer>
      <Button>
      <IoMdOptions size={20}/>
      </Button>
      <input placeholder=" Busque por restaurantes ou pratos" />
      <Button>
      <AiOutlineSearch size={20} />
      </Button>
    </SearchBarContainer>
  );
}

export default BarraDeBusca;