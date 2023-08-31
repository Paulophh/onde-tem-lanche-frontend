import React from 'react';
import { CenteredButtonContainer, StyledButton } from './styles';

const ContinueButton = ({ onClick }) => {
  return (
  <CenteredButtonContainer>
    <StyledButton onClick={onClick}>
      Continuar
    </StyledButton>
  </CenteredButtonContainer>
  );
};

export default ContinueButton;