import * as yup from 'yup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '../../services/api';
import { useAuthContext } from '../../contexts/AuthContext';

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
import SubmitButton from '../../components/SubmitButton';

const formSchema = yup.object({
    email: yup.string().email('Email inválido').required('Informe o email'),
    password: yup.string().min(8, 'Senha deve conter ao menos 8 caractéres').required('Informe a senha')
})

const Login = () => {
    const [selectedEntity, setSelectedEntity] = useState('restaurants');
    const [isLoading, setIsLoading] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');

    const { storeToken } = useAuthContext();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    async function login(entity, data) {
        setIsLoading(true);

        try {
            const response = await api.post(`/${entity}/session`, data);
            storeToken(response.data.token);

            navigate('/');

        } catch (error) {
            let message = 'Algo deu errado, tente novamente mais tarde';
            if (error.response.status === 404) {
                message = error.response.data.message
            }

            setLoginErrorMessage(message)
            setTimeout(() => {
                setLoginErrorMessage('');
            }, 3000);

        } finally {
            setIsLoading(false);
        }
    }

    async function handleLoginSubmit(data) {
        await login(selectedEntity, data);
    }

    return (
        <LoginContainer>
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
                        <SubmitButton
                            title='Continuar'
                            isLoading={isLoading}
                        />

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