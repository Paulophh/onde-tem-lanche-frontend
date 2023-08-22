import React from 'react';

import { HeaderContainer, LogoImg, Nav, UserIcon } from "./styles";

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <a href='#'>Início</a>
          </li>
          <li>
            <a href='#'>Recomendados</a>
          </li>
          <li>
            <a href='#'>
              <LogoImg src={logo} alt='logo' />
            </a>
          </li>
          <li>
            <a href='#'>Reservas</a>
          </li>
          <li>
            <a href='#'>Favoritos</a>
          </li>
          <li>
            <a href='#'><UserIcon /></a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;