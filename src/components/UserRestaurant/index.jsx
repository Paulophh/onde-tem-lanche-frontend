import React from 'react';
import { OptionsContainer, Option, CenteredContainer } from './styles';
import { useState } from 'react';

const UserRestaurant = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  return (
    <CenteredContainer>
      <OptionsContainer>
        <Option isSelected={selectedOption === 'restaurant'} onClick={() => handleOptionSelect('restaurant')}>
          Restaurante
        </Option>
        <Option isSelected={selectedOption === 'client'} onClick={() => handleOptionSelect('client')}>
          Cliente
        </Option>
      </OptionsContainer>
    </CenteredContainer>
  );
}

export default UserRestaurant;