import React from "react";
import * as yup from 'yup';
import { useState } from "react";
import { api } from '../../services/api';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuthContext } from '../../contexts/AuthContext';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ErrorPopUp from "../../components/ErrorPopUp";
import SubmitButton from "../../components/SubmitButton";
import EntitySelector from "../../components/EntitySelector";
import LoginAndRegisterInput from "../../components/LoginAndRegisterInput";

import {
  FormContainer,
  MidSectionContainer,
  RedirectToRegisterContainer,
  RegisterContainer,
} from "./styles";

const registerSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().email('Email inválido').required('Informe o email'),
  password: yup.string().min(8, 'Senha deve ter ao menos 8 caractéres').required('Informe a senha'),
  confirmPassword: yup.string().required('Confirme sua senha').oneOf([yup.ref('password')], 'Senhas devem ser iguais')
})

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState('restaurants'); // 
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const navigate = useNavigate();

  const { storeToken } = useAuthContext();

  async function loginEntity(entity, data) {
    const response = await api.post(`/${entity}/session`, data);
    const token = response.data.token;


    storeToken(token);
  }

  async function registerEntity(entity, data) {
    setIsLoading(true);
    try {
      await api.post(`/${entity}`, data);
      await loginEntity(entity, {
        email: data.email,
        password: data.password
      })

      if (entity === 'customers') {
        navigate('/customer/info');
      } else {
        navigate('/restaurant/info')
      }

    } catch (error) {
      let message = 'Algo deu errado, tente novamente mais tarde';
      if (error.response.status === 401) {
        message = 'Email já cadastrado!'
      }

      setRegisterErrorMessage(message);
      setTimeout(() => {
        setRegisterErrorMessage('');
      }, 3000);

    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegisterEntity(data) {
    await registerEntity(selectedEntity, data);
  }

  return (
    <RegisterContainer>
      <Header />

      <MidSectionContainer>
        <EntitySelector
          selectedEntity={selectedEntity}
          setSelectedEntity={setSelectedEntity}
        />

        {
          registerErrorMessage &&
          <ErrorPopUp message={registerErrorMessage} />
        }

        <FormContainer onSubmit={handleSubmit(handleRegisterEntity)}>
          <div className='inputs-container'>
            <LoginAndRegisterInput
              input='name'
              register={register}
              errorMessage={errors.name?.message}
            />

            <LoginAndRegisterInput
              input='email'
              register={register}
              errorMessage={errors.email?.message}
            />

            <LoginAndRegisterInput
              input='password'
              type='password'
              register={register}
              errorMessage={errors.password?.message}
            />

            <LoginAndRegisterInput
              input='confirmPassword'
              type='password'
              register={register}
              errorMessage={errors.confirmPassword?.message}
            />
          </div>

          <div className='bottom-container'>
            <SubmitButton
              title="Continuar"
              isLoading={isLoading}
            />

            <RedirectToRegisterContainer>
              <span>
                Já possui conta?
              </span>
              <Link to='/login'>
                Faça login!
              </Link>

            </RedirectToRegisterContainer>
          </div>
        </FormContainer>

      </MidSectionContainer>

      <Footer />
    </RegisterContainer>

  );
}

export default Register;