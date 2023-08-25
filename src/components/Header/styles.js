import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 16px 0;
  background-color: ${props => props.theme.colors['grey']};
  box-shadow: 0px 4px 4px ${props => props.theme.colors['box-shadow']};
`;

export const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    flex: .85;
    position: relative;
    max-width: 1000px;
  }

  .nav-link {
    display: none;
    
    button {
      font-size: 1.8rem;
      border: none;
      background-color: transparent;
    }

    button:hover {
      cursor: pointer;
      transform: scale(1.1);
      filter: brightness(1.1);
      transition: .2s;
    }

    button:active {
      transform: scale(1);
      filter: brightness(0.95);
      transition: 0;
    }
  }

  .nav-link-logo {
    display: block;
  }

  @media only screen and (min-width: 830px) {
    ul {
      justify-content: space-around;
    }

    .nav-link {
      display: block;
    }

    .nav-link-profile {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(100%, -40%);
    }

    .nav-link-profile button {
      color: ${props => props.theme.colors.orange};
    }
  }
`;

export const UserIcon = styled.span`
  color: ${props => props.theme.colors['orange']};
`;

export const LogoImg = styled.img`
  width: 179px;
  height: 68px;
`;