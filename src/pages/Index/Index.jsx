import React from 'react';

import { PageContainer } from './styles';
import Highlights from '../../components/Highlights';
import Footer from '../../components/Footer';
import FoodCategories from '../../components/FoodCategories';
import { Main } from './styles';

import Header from "../../components/Header";
import BarraDeBusca from '../../components/BarraDeBusca';
import HighlightsCard from '../../components/HighlightsCard';
import Category from '../../components/Category';

 

const mockedRestaurant = {
  name: 'Nome do Restaurante',
  description: 'Um lugar aconchegante para passar o tempo enquanto adoça sua vida com as variedades de nosso menu, temos opções veganas!',
  closingTime: '22h',
  starRating: 4
}

const Index = () => {

  return (
    <>
      <Header />
      <PageContainer>
        <BarraDeBusca />
        <Highlights />
        <HighlightsCard
        restaurant={mockedRestaurant}
        />
        <Category />
        <FoodCategories/>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Index;

