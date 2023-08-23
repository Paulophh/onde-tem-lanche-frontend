import React from 'react';
import Header from "../../components/Header";
import BarraDeBusca from '../../components/BarraDeBusca';
import { PageContainer } from './styles';
import Highlights from '../../components/Highlights';

const Index = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <BarraDeBusca />
        <Highlights/>
      </PageContainer>
      
    </>
  );
}

export default Index;