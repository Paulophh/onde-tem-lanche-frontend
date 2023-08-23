import React from 'react';
import { Category, CategoryIcon, CategoryTitle, CategoriesContainer } from './styles';

import { LiaHamburgerSolid } from 'react-icons/lia';
import { PiPizzaLight } from 'react-icons/pi';
import { TbMeat } from 'react-icons/tb';
import { BiSushi } from 'react-icons/bi';
import { CiFries } from 'react-icons/ci';
import { LuSalad } from 'react-icons/lu';
import { RiCake3Line } from 'react-icons/ri';

const FoodCategories = () => {
  return (
    <CategoriesContainer>
      <Category>
        <CategoryIcon>
          <LiaHamburgerSolid />
        </CategoryIcon>
        <CategoryTitle>Lanches</CategoryTitle>
      </Category>
      <Category>
        <CategoryIcon>
          < PiPizzaLight/>
        </CategoryIcon>
        <CategoryTitle>Pizza</CategoryTitle>
      </Category>
      <Category>
        <CategoryIcon>
          < TbMeat/>
        </CategoryIcon>
        <CategoryTitle>Carnes</CategoryTitle>
      </Category>
      <Category>
        <CategoryIcon>
          < BiSushi/>
        </CategoryIcon>
        <CategoryTitle>Japonesa</CategoryTitle>
      </Category>
      <Category>
        <CategoryIcon>
          < CiFries/>
        </CategoryIcon>
        <CategoryTitle>Porções</CategoryTitle>
      </Category>
      <Category>
        <CategoryIcon>
          < LuSalad/>
        </CategoryIcon>
        <CategoryTitle>Saladas</CategoryTitle>
      </Category>
      <Category>
        <CategoryIcon>
          < RiCake3Line/>
        </CategoryIcon>
        <CategoryTitle>Doces</CategoryTitle>
      </Category>
    </CategoriesContainer>
  );
};

export default FoodCategories;