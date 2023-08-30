import { useState } from 'react';

import {
    FormContainer,
    LoginContainer,
    MidSectionContainer
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EntitySelector from '../../components/EntitySelector';
import LoginAndRegisterInput from '../../components/LoginAndRegisterInput';

const Login = () => {
    const [selectedEntity, setSelectedEntity] = useState('restaurant');

    return (
        <LoginContainer>
            <Header />
            <MidSectionContainer>
                <EntitySelector
                    selectedEntity={selectedEntity}
                    setSelectedEntity={setSelectedEntity}
                />

                <FormContainer>
                    <LoginAndRegisterInput
                        input='email'
                    />

                    <LoginAndRegisterInput
                        input='password'
                    />

                </FormContainer>
            </MidSectionContainer>
            <Footer />
        </LoginContainer>
    )

}

export default Login;