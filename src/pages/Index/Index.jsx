import React, { useState, useEffect } from 'react';
import Loading from 'react-loading';

import { api } from '../../services/api';

import {
  FoodsContainer,
  FoodsList,
  HighlightsCardsContainer,
  LoadingRestaurantContainer,
  PageContainer
} from './styles';

import Footer from '../../components/Footer'
import Header from "../../components/Header";
import FoodCard from '../../components/FoodCard';
import Highlights from '../../components/Highlights';
import SearchBar from '../../components/SearchBar';
import FoodCategories from '../../components/FoodCategories';
import RestaurantHighlightCard from '../../components/RestaurantHighlightCard';

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
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(false);

  async function handleFilterRestaurants(e) {
    e.preventDefault();

    const filterQuery = filterInput ? `?q=${filterInput}` : '';
    await fetchRestaurants(filterQuery);
  }

  async function clearInputAndResetFilter() {
    setFilterInput('');

    await fetchRestaurants();
  }

  const dishes = [];

  for (let i = 0; i <= 9; i++) {
    const newDish = {
      ...mockerDish,
      id: `dish-${i}`
    }
    dishes.push(newDish);
  }

  async function fetchRestaurants(queryString = '') {
    setIsLoadingRestaurants(true);
    const response = await api.get(`/restaurants${queryString}`);

    setIsLoadingRestaurants(false);
    setRestaurants(response.data.restaurants);
  }

  useEffect(() => {
    if (filterInput === '') {
      fetchRestaurants();
    }
  }, [filterInput])

  return (
    <>
      <Header />
      <PageContainer>
        <SearchBar
          value={filterInput}
          setFilterInput={setFilterInput}
          handleFilterRestaurants={handleFilterRestaurants}
          clearInputAndResetFilter={clearInputAndResetFilter}
        />
        <Highlights
          text='Recomendados'
        />
        <HighlightsCardsContainer>
          {
            isLoadingRestaurants &&
            <LoadingRestaurantContainer>
              <Loading
                type='spin'
                width={20}
                height={20}
                color='#333'
              />
            </LoadingRestaurantContainer>
          }

          {restaurants.length > 0 ?
            restaurants.map((rest) => (
              <RestaurantHighlightCard
                key={rest.id}
                restaurant={rest}
              />
            ))
            :
            <div className='no-restaurant-found-message'>
              Nenhum restaurante encontrado
            </div>
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