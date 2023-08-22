import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';

export const HeaderContainer = styled.header`
  padding: 16px;
  background-color: ${props => props.theme.colors['grey']};
  box-shadow: 0px 4px 4px ${props => props.theme.colors['box-shadow']};
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 6rem;
    align-items: center;
    justify-content: center;
  }

  li a {
    font-size: 2.6rem;
  }
`;

export const UserIcon = styled(BiUserCircle)`
  color: ${props => props.theme.colors['orange']};
  width: 64px;
  height: 64px;
`;

export const LogoImg = styled.img`
  width: 179px;
  height: 68px;
`;