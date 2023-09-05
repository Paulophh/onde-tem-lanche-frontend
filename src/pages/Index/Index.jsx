import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

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
import SearchBar from '../../components/SearchBar';
import FoodCategories from '../../components/FoodCategories';
import RestaurantHighlightCard from '../../components/RestaurantHighlightCard';

// const mockedRestaurant = {
//   name: 'Nome do Restaurante',
//   description: 'Um lugar aconchegante para passar o tempo enquanto adoça sua vida com as variedades de nosso menu, temos opções veganas!',
//   closingTime: '22h',
//   starRating: 4
// }

const mockerDish = {
  name: 'X-salada duplo',
  rating: 4.5,
  price: 25,
  description: 'Duas carnes, alface, tomate, cebola, queijo e molho caseiro da casa.'
}

const Index = () => {
  const [foodCategory, setFoodCategory] = useState('Lanches');
  const [filterInput, setFilterInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  // const restaurants = [];
  const dishes = [];

  // for (let i = 0; i <= 9; i++) {
  //   const newRestaurant = {
  //     ...mockedRestaurant,
  //     id: `restaurant-${i}`
  //   }
  //   restaurants.push(newRestaurant);
  // }

  for (let i = 0; i <= 9; i++) {
    const newDish = {
      ...mockerDish,
      id: `dish-${i}`
    }
    dishes.push(newDish);
  }

  async function fetchRestaurants() {
    const response = await api.get('/restaurants');

    setRestaurants(response.data.restaurants);
  }

  useEffect(() => {
    fetchRestaurants();
  }, [])

  return (
    <>
      <Header />
      <PageContainer>
        <SearchBar
          value={filterInput}
          setFilterInput={setFilterInput}
        />
        <Highlights
          text='Recomendados'
        />
        <HighlightsCardsContainer>
          {restaurants.length > 0 &&
            restaurants.map((rest) => (
              <RestaurantHighlightCard
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