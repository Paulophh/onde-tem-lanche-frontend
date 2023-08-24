import React from 'react';

import { PageContainer } from './styles';

import Footer from '../../components/Footer'
import Header from "../../components/Header";
import Highlights from '../../components/Highlights';
import BarraDeBusca from '../../components/BarraDeBusca';
import HighlightsCard from '../../components/HighlightsCard';

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
      / <PageContainer>
        <BarraDeBusca />
        <Highlights
          text='Destaques'
        />
        <HighlightsCard
          restaurant={mockedRestaurant}
        />
        {/* <Footer /> */}
      </PageContainer>
      <HighlightsCard
        restaurant={mockedRestaurant}
      />
      <Footer /> /

    </>
  );
}

export default Index;