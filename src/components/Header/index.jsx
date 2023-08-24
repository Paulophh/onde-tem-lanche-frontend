import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

import {
  HeaderContainer,
  LogoImg,
  Nav,
  UserIcon
} from "./styles";

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li className='nav-link'>
            <button >
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
            <button >
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