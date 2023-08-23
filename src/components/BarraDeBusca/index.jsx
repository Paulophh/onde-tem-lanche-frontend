import React from 'react';
import { SearchBarContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

const BarraDeBusca = () => {
  return (
    <SearchBarContainer>
      <AiOutlineSearch size={20} />
      <input placeholder="busque por restaurante ou pratos" />
    </SearchBarContainer>
  );
}

export default BarraDeBusca;