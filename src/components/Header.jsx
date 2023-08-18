import React from 'react';
import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';
import logo from '../images/logo.svg';

const HeaderContainer = styled.header`
  background-color: rgba(135, 135, 135, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 5rem;
  }

  li a {
    text-decoration: none;
    color: #000; 
    font-size: 26px;
    
  }
`;

const UserIcon = styled(BiUserCircle)`
  color: #ff8000;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  width: 179px;
  height: 68px;
  flex-shrink: 0;
`;

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
