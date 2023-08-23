import React from 'react';
import Header from "../../components/Header";
import BarraDeBusca from '../../components/BarraDeBusca';
import { PageContainer } from './styles';
import Highlights from '../../components/Highlights';
import Footer from '../../components/Footer'

const Index = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <BarraDeBusca />
        <Highlights/>
      </PageContainer>
      <Footer/>
      
    </>
  );
}

export default Index;