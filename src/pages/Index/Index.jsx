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
        restaurant={{}}
      />
    </>
  );
}

export default Index;