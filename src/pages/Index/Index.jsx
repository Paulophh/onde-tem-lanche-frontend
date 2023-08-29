import React, { useState } from 'react';

import { HighlightsCardsContainer, PageContainer } from './styles';

import Footer from '../../components/Footer'
import Header from "../../components/Header";
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

const Index = () => {
  const [foodCategory, setFoodCategory] = useState('Lanches');

  const restaurants = [];
  for (let i = 0; i <= 9; i++) {
    restaurants.push(mockedRestaurant);
  }

  return (
    <>
      <Header />
      / <PageContainer>
        <BarraDeBusca />
        <Highlights
          text='Recomendados'
        />
        <HighlightsCardsContainer>
          {
            restaurants.map((rest, index) => (
              <HighlightsCard
                key={`${rest.name}-${index}`}
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

        <Footer />
      </PageContainer>
    </>
  );
}

export default Index;