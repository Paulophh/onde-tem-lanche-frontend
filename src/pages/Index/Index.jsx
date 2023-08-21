import React from 'react';
import Header from "../../components/Header";
import BarraDeBusca from '../../components/BarraDeBusca';
import { PageContainer } from './styles';

const Index = () => {
  return (
  <>
    <Header />
  <PageContainer>
    <BarraDeBusca />
  </PageContainer>
  </>
  );
}

export default Index;