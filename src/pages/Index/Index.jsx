import React, { useState } from 'react';

import {
  FoodsContainer,
  FoodsList,
  HighlightsCardsContainer,
  PageContainer
} from './styles';

import Footer from '../../components/Footer'
import Header from "../../components/Header";
import FoodCard from '../../components/FoodCard';
import Highlights from '../../components/Highlights';
import BarraDeBusca from '../../components/BarraDeBusca';
import HighlightsCard from '../../components/HighlightsCard';
import FoodCategories from '../../components/FoodCategories';

const mockedRestaurant = {
  name: 'Nome do Restaurante',
  description: 'Um lugar aconchegante para passar o tempo enquanto adoça sua vida com as variedades de nosso menu, temos opções veganas!',
  closingTime: '22h',
  starRating: 4
}

const mockerDish = {
  name: 'X-salada duplo',
  rating: 4.5,
  price: 25,
  description: 'Duas carnes, alface, tomate, cebola, queijo e molho caseiro da casa.'
}

const Index = () => {
  const [foodCategory, setFoodCategory] = useState('Lanches');
  const [filterInput, setFilterInput] = useState('');

  const restaurants = [];
  const dishes = [];

  for (let i = 0; i <= 9; i++) {
    const newRestaurant = {
      ...mockedRestaurant,
      id: `restaurant-${i}`
    }
    restaurants.push(newRestaurant);
  }

  for (let i = 0; i <= 9; i++) {
    const newDish = {
      ...mockerDish,
      id: `dish-${i}`
    }
    dishes.push(newDish);
  }

  return (
    <>
      <Header />
      / <PageContainer>
        <BarraDeBusca
          value={filterInput}
          setFilterInput={setFilterInput}
        />
        <Highlights
          text='Recomendados'
        />
        <HighlightsCardsContainer>
          {
            restaurants.map((rest, index) => (
              <HighlightsCard
                key={rest.id}
                restaurant={rest}
              />
            ))
          }
        </HighlightsCardsContainer>

        <Highlights
          text='Categorias'
          textPlacement='right'
        />

        <FoodCategories
          selectedFoodCategory={foodCategory}
          setSelectedFoodCategory={setFoodCategory}
        />

        <FoodsContainer>
          <FoodsList>
            {
              dishes.map(dish => (
                <FoodCard
                  key={dish.id}
                  food={dish}
                />
              ))
            }

          </FoodsList>
        </FoodsContainer>

        <Footer />
      </PageContainer>
    </>
  );
}

export default Index;