import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 530px;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);  
  margin-top: 10px;
`;

export const Icon = styled.div`
  margin-left: 10px;
  color: #ccc;
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;

`;