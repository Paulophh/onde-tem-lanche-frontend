import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px;
  width: 300px;

  svg {
    color: #999;
    margin-right: 8px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    color: #333;
  }
`;



const BarraDeBusca = () => {
  return (
    <SearchBarContainer>
      <AiOutlineSearch size={20} />
      <input type="text" placeholder="Buscar..." />
    </SearchBarContainer>
  );
}

export default BarraDeBusca;