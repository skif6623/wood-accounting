import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import {
  HeaderLayout,
  LogoWrapper,
  IconWrapper,
  OpenMenuIcon,
  AuthIcon,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderLayout>
      <LogoWrapper>
        <IconWrapper>
          <OpenMenuIcon />
        </IconWrapper>
        <NavLink to="/">
          <img width="300px" src={logo} alt="logo" />
        </NavLink>
      </LogoWrapper>
      <AuthIcon />
    </HeaderLayout>
  );
};
