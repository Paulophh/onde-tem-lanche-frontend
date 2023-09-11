import Loading from 'react-loading';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { geocodeApi } from '../../services/geocode-api';

import {
  FoodsContainer,
  FoodsList,
  HighlightsCardsContainer,
  LoadingDishesContainer,
  LoadingRestaurantContainer,
  LocationSearchContainer,
  NearbyCardsContainer,
  NoFoodFoundContainer,
  PageContainer
} from './styles';

import Footer from '../../components/Footer'
import Header from "../../components/Header";
import FoodCard from '../../components/FoodCard';
import SearchBar from '../../components/SearchBar';
import Highlights from '../../components/Highlights';
import SubmitButton from '../../components/SubmitButton';
import FoodCategories from '../../components/FoodCategories';
import AddressAutoComplete from '../../components/AddressAutoComplete';
import RestaurantHighlightCard from '../../components/RestaurantHighlightCard';

const Index = () => {
  const [foodCategory, setFoodCategory] = useState('Lanches');
  const [filterInput, setFilterInput] = useState('');

  const [restaurants, setRestaurants] = useState([]);
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(false);

  const [dishes, setDishes] = useState([]);
  const [isLoadingDishes, setIsLoadingDishes] = useState(false);

  const [customerAddress, setCustomerAddress] = useState('');
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [isLoadingNearbyRestaurants, setIsLoadingNearbyRestaurants] = useState(false);

  const geocodeApiKey = process.env.REACT_APP_GEOCODE_API_KEY;

  async function handleFilterRestaurants(e) {
    e.preventDefault();

    const filterQuery = filterInput ? `?q=${filterInput}` : '';
    await fetchRestaurants(filterQuery);
  }

  async function clearInputAndResetFilter() {
    setFilterInput('');

    await fetchRestaurants();
    await fetchNearbyRestaurants();
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

  function filterWithinNearbyRestaurants(query) {
    const queryValue = query.trim().toLowerCase().split('=')[1];

    const filteredNearbyRestaurants = nearbyRestaurants.filter(res => {
      const restaurantName = res.name.toLowerCase().trim();
      const restaurantDescription = res.description ? res.description.toLowerCase().trim() : '';

      return restaurantName.includes(queryValue) || restaurantDescription.includes(queryValue);
    })

    setNearbyRestaurants(filteredNearbyRestaurants);
  }

  async function fetchRestaurants(queryString = '') {
    setIsLoadingRestaurants(true);
    const response = await api.get(`/restaurants${queryString}`);

    if (nearbyRestaurants.length > 0 && queryString) {
      filterWithinNearbyRestaurants(queryString);
    }

    setIsLoadingRestaurants(false);
    setRestaurants(response.data.restaurants);
  }

  async function getCoordinatesFromAddress(address) {
    const response = await geocodeApi.get(`/json?address=${address}&key=${geocodeApiKey}`);

    if (response.data.results.length === 0) return null;
    const coordinates = response.data.results[0].geometry.location;

    return coordinates;
  }

  async function fetchNearbyRestaurants(e) {
    if (e) e.preventDefault();

    if (!customerAddress) return;

    try {
      setIsLoadingNearbyRestaurants(true);
      const coordinates = await getCoordinatesFromAddress(customerAddress);

      if (!coordinates) {
        toast.warning('Não foram encontrados restaurantes próximos a você');
        return;
      }

      const { lat, lng } = coordinates;
      const response = await api.get(`/restaurants/nearby?lat=${lat}&lng=${lng}`);

      const foundRestaurants = response.data.restaurants;

      if (foundRestaurants.length > 0) {
        setNearbyRestaurants(foundRestaurants)
      } else {
        toast.warning('Não foram encontrados restaurantes próximos a você');
        setNearbyRestaurants([]);
        return;
      }

    } catch (error) {
      console.log(error);

    } finally {
      setIsLoadingNearbyRestaurants(false);
      setCustomerAddress('');
    }
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

        <LocationSearchContainer onSubmit={fetchNearbyRestaurants}>
          <h2>
            Quer encontrar os restaurantes próximos a você?
          </h2>

          <h3>
            Nos diga onde você está
          </h3>

          <div className='autocomplete-container'>
            <AddressAutoComplete
              value={customerAddress}
              setValue={setCustomerAddress}
            />

            {customerAddress &&
              <SubmitButton
                onClick={fetchNearbyRestaurants}
                title='Buscar'
                isLoading={isLoadingNearbyRestaurants}
              />
            }
          </div>
        </LocationSearchContainer>

        <SearchBar
          value={filterInput}
          setFilterInput={setFilterInput}
          handleFilterRestaurants={handleFilterRestaurants}
          clearInputAndResetFilter={clearInputAndResetFilter}
        />

        {nearbyRestaurants.length > 0 &&
          <div>
            <Highlights
              text={'Restaurantes próximos a você'}
              textPlacement='right'
            />

            <NearbyCardsContainer>
              {
                nearbyRestaurants.map(res => (
                  <RestaurantHighlightCard
                    key={`nearby-${res.restaurant_id}`}
                    restaurant={res}
                  />
                ))
              }
            </NearbyCardsContainer>
          </div>
        }

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