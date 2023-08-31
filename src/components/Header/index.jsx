import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BiUserCircle } from 'react-icons/bi';

import {
  HeaderContainer,
  LogoImg,
  Nav,
} from "./styles";

import logo from '../../assets/images/logo.svg';

const Header = () => {
  const navigate = useNavigate();

  function handleRedirectToLogin() {
    navigate('/login');
  }

  function handleRedirectToHome() {
    navigate('/');
  }

  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li className='nav-link'>
            <button onClick={handleRedirectToHome}>
              Início
            </button>
          </li>
          <li className='nav-link'>
            <button >
              Recomendados
            </button>
          </li>
          <li className='nav-link nav-link-logo'>
            <button>
              <LogoImg src={logo} alt='logo' />
            </button>
          </li>
          <li className='nav-link'>
            <button >
              Reservas
            </button>
          </li>
          <li className='nav-link'>
            <button >
              Favoritos
            </button>
          </li>
          <li className='nav-link nav-link-profile'>
            <button onClick={handleRedirectToLogin}>
              <BiUserCircle
                size={45}
              />
            </button>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;