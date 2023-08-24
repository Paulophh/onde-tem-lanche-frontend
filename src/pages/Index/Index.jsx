import React from 'react';
import Header from "../../components/Header";
import BarraDeBusca from '../../components/BarraDeBusca';
import { PageContainer } from './styles';
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
      <PageContainer>
        <BarraDeBusca />
      </PageContainer>
      <HighlightsCard
        restaurant={mockedRestaurant}
      />
    </>
  );
}

export default Index;