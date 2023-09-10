import React, { useState, useEffect } from 'react';
import Loading from 'react-loading';

import { api } from '../../services/api';

import {
  FoodsContainer,
  FoodsList,
  HighlightsCardsContainer,
  LoadingDishesContainer,
  LoadingRestaurantContainer,
  NoFoodFoundContainer,
  PageContainer
} from './styles';

import Footer from '../../components/Footer'
import Header from "../../components/Header";
import FoodCard from '../../components/FoodCard';
import Highlights from '../../components/Highlights';
import SearchBar from '../../components/SearchBar';
import FoodCategories from '../../components/FoodCategories';
import RestaurantHighlightCard from '../../components/RestaurantHighlightCard';

const Index = () => {
  const [foodCategory, setFoodCategory] = useState('Lanches');
  const [filterInput, setFilterInput] = useState('');

  const [restaurants, setRestaurants] = useState([]);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(false);

  const [dishes, setDishes] = useState([]);
  const [isLoadingDishes, setIsLoadingDishes] = useState(false);

  async function handleFilterRestaurants(e) {
    e.preventDefault();

    const filterQuery = filterInput ? `?q=${filterInput}` : '';
    await fetchRestaurants(filterQuery);
  }

  async function clearInputAndResetFilter() {
    setFilterInput('');

    await fetchRestaurants();
  }

  async function filterDishesByCategories(category) {
    setIsLoadingDishes(true);

    try {
      const response = await api.get(`/dishes/filter?preferences=${category}`)

      const { dishes, totalFound } = response.data;

      setDishes(dishes);
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoadingDishes(false);
    }
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

  useEffect(() => {
    filterDishesByCategories(foodCategory);
  }, [foodCategory])

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
          filterDishesByCategories={filterDishesByCategories}
        />

        <FoodsContainer>
          {isLoadingDishes ?
            <LoadingDishesContainer>
              <Loading
                type='spin'
                width={20}
                height={20}
                color='#333'
              />
            </LoadingDishesContainer>

            :

            <FoodsList>
              {dishes.length === 0 ?
                <NoFoodFoundContainer>
                  Nenhum prato encontrado na categoria <span>{foodCategory}</span>
                </NoFoodFoundContainer>
                :
                dishes.map(dish => (
                  <FoodCard
                    key={dish.id}
                    food={dish}
                  />
                ))
              }
            </FoodsList>
          }
        </FoodsContainer>

        <Footer />
      </PageContainer>
    </>
  );
}

export default Index;