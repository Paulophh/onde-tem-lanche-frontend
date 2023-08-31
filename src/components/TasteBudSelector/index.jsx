import React from 'react';
import { useState } from 'react';
import { FoodContainer, FoodItem, StyledDiv } from './styles';


const SeletorComida = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const toggleFood = (food) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter(item => item !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const foods = ["Carne", "Porções", "Lanches", "Marmitex", "Massas", "Saladas", "Yakisoba", "Confeitaria", "Pizzas", "Esfiha", "Japonês", "Açaí/Sorvete"];


  return (
    <StyledDiv>
    <FoodContainer>
      {foods.map(food => (
        <FoodItem key={food}>
          <input
            type="checkbox"
            checked={selectedFoods.includes(food)}
            onChange={() => toggleFood(food)}
          />
          <span>{food}</span>
        </FoodItem>
      ))}
    </FoodContainer>
  </StyledDiv>
  );
}

export default SeletorComida;