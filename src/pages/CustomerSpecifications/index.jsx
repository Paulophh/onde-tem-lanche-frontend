import React from 'react';
import Header from '../../components/Header';
import TasteBudSelector from '../../components/TasteBudSelector';
import { Descricao, FavoriteCard, Prompt, Insight, RescriptionCard } from './styles';
import SelectorAlergic from '../../components/SelectorAlergic';
import Footer from '../../components/Footer';

const CustomerSpecifications = () => {
  return (
    <>  
      <Header/>
      <Descricao>
        <p>Antes de ver os restaurantes nos conte um pouco mais sobre você!</p>
      </Descricao>
      <FavoriteCard>
        <Prompt>
          <h1>Do que você mais gosta?</h1>
        </Prompt>
        <Insight>
          <h2>Saber suas preferencias nos ajuda a escolher melhor quais restaurantes serão exibidos.</h2>
        </Insight>
        <TasteBudSelector/>
      </FavoriteCard>
      <RescriptionCard>
        <Prompt>
          <h1>Alguma restrição alimentar?</h1>
        </Prompt>
        <Insight>
          <h2>Com essa informação podemos exibir de forma precisa apenas opções que você pode consumir.</h2>
        </Insight>
        <SelectorAlergic/>
      </RescriptionCard>
      <Footer/>
      </>
  );
}

export default CustomerSpecifications;