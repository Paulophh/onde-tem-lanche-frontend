import * as yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactLoading from 'react-loading';

import { api } from '../../services/api';

import {
    FormContainer,
    LoginContainer,
    MidSectionContainer,
    RedirectToRegisterContainer
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPopUp from '../../components/ErrorPopUp';
import EntitySelector from '../../components/EntitySelector';
import LoginAndRegisterInput from '../../components/LoginAndRegisterInput';

import Carne from '../../assets/icons/carnes.svg'

const formSchema = yup.object({
    email: yup.string().email('Email inválido').required('Informe o email'),
    password: yup.string().min(8, 'Senha deve conter ao menos 8 caractéres').required('Informe a senha')
})

const Login = () => {
    const [selectedEntity, setSelectedEntity] = useState('restaurant');
    const [isLoading, setIsLoading] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    function storeTokenLocally(token) {
        localStorage.setItem('@onde-tem-lanche:token', token);
    }

    async function login(url, data) {
        try {
            const response = await api.post(url, data);
            storeTokenLocally(response.data.token);

        } catch (error) {
            if (error.response.status === 404) {
                setLoginErrorMessage(error.response.data.message)
                setTimeout(() => {
                    setLoginErrorMessage('');
                }, 3000);
            }

        } finally {
            setIsLoading(false);
        }
    }

    async function handleLoginSubmit(data) {
        setIsLoading(true);
        const requestURL = selectedEntity === 'restaurant' ? '/restaurants/session' : '/customers/session';
        await login(requestURL, data);

    }

    return (
        <LoginContainer>
            <Carne />
            <Header />
            <MidSectionContainer>
                <div className='top'>
                    <div className='entity-selector-container'>
                        Fazer login como
                    </div>

                    <EntitySelector
                        selectedEntity={selectedEntity}
                        setSelectedEntity={setSelectedEntity}
                    />
                </div>

                {
                    loginErrorMessage &&
                    <ErrorPopUp
                        message={loginErrorMessage}
                    />
                }

                <FormContainer
                    onSubmit={handleSubmit(handleLoginSubmit)}
                    isLoading={isLoading}
                >
                    <div className='inputs-container'>
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
                    </div>

                    <div className='bottom-container'>
                        <button disabled={isLoading}>
                            {
                                isLoading ?
                                    <span>
                                        <ReactLoading
                                            width={20}
                                            height={20}
                                            color='#7f7777'
                                            type='spin'
                                        />
                                    </span>
                                    :
                                    <span>
                                        Continuar
                                    </span>
                            }
                        </button>

                        <RedirectToRegisterContainer>
                            <span>
                                Não tem cadastro ainda?
                            </span>
                            <Link to={'/register'}>
                                Faça agora!
                            </Link>
                        </RedirectToRegisterContainer>
                    </div>

                </FormContainer>
            </MidSectionContainer>
            <Footer />
        </LoginContainer>
    )

}

export default Login;