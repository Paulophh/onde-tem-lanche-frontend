import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import {
  Description,
  PreferencesCard,
  AllergiesCard,
  PageContentContainer,
  CustomerSpecificationsContainer
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPopUp from '../../components/ErrorPopUp';
import SubmitButton from '../../components/SubmitButton';
import AllergensSelector from '../../components/AllergensSelector';
import PreferencesSelector from '../../components/PreferencesSelector';

const CustomerSpecifications = () => {
  const [preferences, setPreferences] = useState([]);
  const [allergens, setAllergens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  async function updateCustomerData(e) {
    setIsLoading(true);
    e.preventDefault();

    const token = localStorage.getItem('@onde-tem-lanche:token');
    const data = {
      preferences,
      allergens
    }

    try {
      await api.put('/customers', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      navigate('/');

    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage('Precisa estar logado para atualizar os dados');
      }

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CustomerSpecificationsContainer>
      <Header />
      <PageContentContainer onSubmit={updateCustomerData}>
        {errorMessage &&
          <ErrorPopUp
            message={errorMessage}
          />
        }

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
          <AllergensSelector
            allergens={allergens}
            setAllergens={setAllergens}
          />
        </AllergiesCard>

        <SubmitButton
          title='Continuar'
          isLoading={isLoading}
        />
      </PageContentContainer>
      <Footer />
    </CustomerSpecificationsContainer>
  );
}

export default CustomerSpecifications;