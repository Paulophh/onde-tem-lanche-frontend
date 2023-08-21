import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';

export const HeaderContainer = styled.header`
  background-color: rgba(135, 135, 135, 0.25);
  padding: 1rem;
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 5rem;
    align-items: center;
  }

  li a {
    text-decoration: none;
    color: #000; 
    font-size: 26px;
  }
`;

export const UserIcon = styled(BiUserCircle)`
  color: #ff8000;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
`;

export const LogoImg = styled.img`
  width: 179px;
  height: 68px;
  flex-shrink: 0;
`;


