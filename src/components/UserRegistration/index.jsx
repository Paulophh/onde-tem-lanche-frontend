import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { CenteredContainer, FormContainer, Icon, InputBox, InputField } from './styles';


const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  return (
    <CenteredContainer>
      <FormContainer>
        <InputBox>
          <Icon><FaUser  size={24}  /></Icon>
          <InputField
            type="text"
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
          />
        </InputBox>
        <InputBox>
          <Icon><FaEnvelope size={24}  /></Icon>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </InputBox>
        <InputBox>
          <Icon><FaLock size={24} /></Icon>
          <InputField
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputBox>
        <InputBox>
          <Icon><FaLock size={24}  /></Icon>
          <InputField
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </InputBox>
      </FormContainer>
    </CenteredContainer>
    
  );
}

export default UserRegistration;