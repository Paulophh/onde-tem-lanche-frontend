import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import { BiUserCircle } from 'react-icons/bi';
import { FaStore } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import {
  HeaderContainer,
  LogoImg,
  Nav,
} from "./styles";

import logo from '../../assets/images/logo.svg';
import Favorites from '../../pages/Favorites';

const Header = () => {
  const navigate = useNavigate();

  const { userType } = useAuthContext();

  function handleRedirectToLogin() {
    navigate('/login');
  }

  function handleRedirectToHome() {
    navigate('/');
  }

  function handleRedirectToFavorites() {
    navigate('/favorites');
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
            <button onClick={handleRedirectToFavorites}>
              Favoritos
            </button>
          </li>
          <li className='nav-link nav-link-profile'>
            <button onClick={handleRedirectToLogin}>
              {userType === 'RESTAURANT' ?
                <FaStore size={30} />
                : userType === 'CUSTOMER' ?
                  <BiUserCircle size={45} />
                  :
                  <FiLogIn size={30} />
              }

            </button>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;