import React from 'react';
import { Category, CategoryIcon, CategoryTitle, CategoriesContainer } from './styles';

import Carnes from '../../assets/icons/carnes.svg';
import CarnesSelecionado from '../../assets/icons/carnes-selecionado.svg';
import Confeitarias from '../../assets/icons/doces.svg';
import ConfeitariasSelecionado from '../../assets/icons/doces-selecionado.svg';
import Japones from '../../assets/icons/japones.svg';
import JaponesSelecionado from '../../assets/icons/japones-selecionado.svg';
import Lanche from '../../assets/icons/lanches.svg';
import LancheSelecionado from '../../assets/icons/lanches-selecionado.svg';
import Pizza from '../../assets/icons/pizza.svg';
import PizzaSelecionado from '../../assets/icons/pizza-selecionado.svg';
import Porcoes from '../../assets/icons/porcoes.svg';
import PorcoesSelecionado from '../../assets/icons/porcoes-selecionado.svg';
import Saladas from '../../assets/icons/saladas.svg';
import SaladasSelecionado from '../../assets/icons/saladas-selecionado.svg';

const FoodCategories = ({ selectedFoodCategory, setSelectedFoodCategory }) => {

  function handleSelectCategory(category) {
    setSelectedFoodCategory(category);
  }

  return (
    <CategoriesContainer>
      <Category
        isSelected={selectedFoodCategory === 'Lanches'}
        onClick={() => handleSelectCategory('Lanches')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Lanches'}
        >
          <img
            src={selectedFoodCategory === 'Lanches' ? LancheSelecionado : Lanche}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Lanches'}>
          Lanches
        </CategoryTitle>
      </Category>

      <Category
        isSelected={selectedFoodCategory === 'Pizza'}
        onClick={() => handleSelectCategory('Pizza')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Pizza'}
        >
          <img
            src={selectedFoodCategory === 'Pizza' ? PizzaSelecionado : Pizza}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Pizza'}>
          Pizza
        </CategoryTitle>
      </Category>

      <Category
        isSelected={selectedFoodCategory === 'Carnes'}
        onClick={() => handleSelectCategory('Carnes')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Carnes'}
        >
          <img
            src={selectedFoodCategory === 'Carnes' ? CarnesSelecionado : Carnes}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Carnes'}>
          Carnes
        </CategoryTitle>
      </Category>

      <Category
        isSelected={selectedFoodCategory === 'Japonês'}
        onClick={() => handleSelectCategory('Japonês')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Japonês'}
        >
          <img
            src={selectedFoodCategory === 'Japonês' ? JaponesSelecionado : Japones}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Japonês'}>
          Japonês
        </CategoryTitle>
      </Category>

      <Category
        isSelected={selectedFoodCategory === 'Porções'}
        onClick={() => handleSelectCategory('Porções')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Porções'}
        >
          <img
            src={selectedFoodCategory === 'Porções' ? PorcoesSelecionado : Porcoes}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Porções'}>
          Porções
        </CategoryTitle>
      </Category>

      <Category
        isSelected={selectedFoodCategory === 'Saladas'}
        onClick={() => handleSelectCategory('Saladas')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Saladas'}
        >
          <img
            src={selectedFoodCategory === 'Saladas' ? SaladasSelecionado : Saladas}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Saladas'}>
          Saladas
        </CategoryTitle>
      </Category>

      <Category
        isSelected={selectedFoodCategory === 'Confeitarias'}
        onClick={() => handleSelectCategory('Confeitarias')}
      >
        <CategoryIcon
          isSelected={selectedFoodCategory === 'Confeitarias'}
        >
          <img
            src={selectedFoodCategory === 'Confeitarias' ? ConfeitariasSelecionado : Confeitarias}
            alt=""
          />
        </CategoryIcon>
        <CategoryTitle isSelected={selectedFoodCategory === 'Confeitarias'}>
          Confeitarias
        </CategoryTitle>
      </Category>

    </CategoriesContainer>
  );
};

export default FoodCategories;