import React from 'react';
import { useState } from 'react';

import {
  Description,
  PreferencesCard,
  AllergiesCard
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AllergiesSelector from '../../components/AllergiesSelector';
import PreferencesSelector from '../../components/PreferencesSelector';

const CustomerSpecifications = () => {
  const [preferences, setPreferences] = useState([]);
  const [allergies, setAllergies] = useState([]);

  return (
    <>
      <Header />
      <Description>
        <p>
          Antes de ver os restaurantes nos conte um pouco mais sobre você!
        </p>
      </Description>

      <PreferencesCard>
        <h1>
          Do que você mais gosta?
        </h1>

        <h2>
          Saber suas preferencias nos ajuda a escolher melhor quais restaurantes serão exibidos
        </h2>

        <PreferencesSelector
          preferences={preferences}
          setPreferences={setPreferences}
        />
      </PreferencesCard>

      <AllergiesCard>
        <h1>
          Alguma restrição alimentar?
        </h1>

        <h2>
          Com essa informação podemos exibir de forma precisa apenas opções que você pode consumir
        </h2>
        <AllergiesSelector
          allergies={allergies}
          setAllergies={setAllergies}
        />
      </AllergiesCard>
      <Footer />
    </>
  );
}

export default CustomerSpecifications;