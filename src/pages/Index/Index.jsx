import React from 'react';
import Header from "../../components/Header";
import BarraDeBusca from '../../components/BarraDeBusca'; 
import { PageContainer } from './styles';
import HighlightsCard from '../../components/HighlightsCard';

const Index = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <BarraDeBusca />
      </PageContainer>
      <HighlightsCard
        name="Nome do Restaurantebuycycr"
        imageSrc="restaurant-image.jpg"
        description="Descrição do restaurante."
        closingTime="Fecha às 22:00"
        starRating={4.5}
      />
    </>
  );
}

export default Index;