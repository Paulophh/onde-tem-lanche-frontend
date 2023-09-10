import React from 'react';

import { Category, CategoryIcon, CategoryTitle, CategoriesContainer } from './styles';

import { FOOD_CATEGORIES } from '../../static';

const FoodCategories = ({ selectedFoodCategory, setSelectedFoodCategory, filterDishesByCategories }) => {

  function handleSelectCategory(category) {
    setSelectedFoodCategory(category);
    filterDishesByCategories(category);
  }

  return (
    <CategoriesContainer>
      {
        FOOD_CATEGORIES.map(category => (
          <Category
            key={category.name}
            isSelected={selectedFoodCategory === category.name}
            onClick={() => handleSelectCategory(category.name)}
          >
            <CategoryIcon isSelected={selectedFoodCategory === category.name}>
              <img
                src={selectedFoodCategory === category.name ? category.selectedIcon : category.icon}
                alt=""
              />
            </CategoryIcon>

            <CategoryTitle >
              {category.name}
            </CategoryTitle>
          </Category>
        ))
      }
    </CategoriesContainer>
  );
};

export default FoodCategories;