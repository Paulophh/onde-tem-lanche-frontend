import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { useAuthContext } from '../../contexts/AuthContext';

import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { FaStore } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

import {
  HeaderContainer,
  LogoImg,
  Nav,
} from "./styles";

import logo from '../../assets/images/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const params = useParams();

  const restaurantId = params.restaurantId;

  const { userType, token, logout } = useAuthContext();

  const tokenData = token ? jwt_decode(token) : {};

  const isOwnRestaurant = tokenData.sub === restaurantId;

  function handleRedirectToLogin() {
    navigate('/login');
  }

  function handleRedirectToRestaurantProfile() {
    const userId = tokenData ? tokenData.sub : '';
    navigate(`/restaurant/${userId}`);
  }

  function handleRedirectToCustomerProfile() {
    console.log('Implementar página do Cliente');
  }

  function handleRedirectToHome() {
    navigate('/');
  }

  function handleLogout() {
    logout();

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
            {userType === 'RESTAURANT' && !isOwnRestaurant ?
              <button onClick={handleRedirectToRestaurantProfile}>
                <FaStore size={30} />
              </button>
              : userType === 'RESTAURANT' && isOwnRestaurant ?
                <button onClick={handleLogout}>
                  <BiLogOut size={26} />
                </button>
                : userType === 'CUSTOMER' ?
                  <button onClick={handleRedirectToCustomerProfile}>
                    <BiUserCircle size={45} />
                  </button>
                  :
                  <button onClick={handleRedirectToLogin}>
                    <FiLogIn size={30} />
                  </button>
            }
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;