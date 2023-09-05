import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loggedInSelector } from '../../redux/selectors';

import { UserMenu } from '../UserMenu/UserMenu';
import {
  HeaderLayout,
  LogoWrapper,
  IconWrapper,
  OpenMenuIcon,
  AuthIcon,
  LogoImage,
} from './Header.styled';

export interface HeaderTypes {
  isOpen: boolean;
  toggle: () => void;
}

export const Header: FC<HeaderTypes> = ({ isOpen, toggle }) => {
  const isLoggedin = useAppSelector(loggedInSelector);

  return (
    <HeaderLayout>
      <LogoWrapper>
        <IconWrapper
          onClick={() => {
            toggle();
          }}
        >
          <OpenMenuIcon />
        </IconWrapper>
        <NavLink to="/">
          <LogoImage open={isOpen} src={logo} alt="logo" />
        </NavLink>
      </LogoWrapper>
      {isLoggedin ? <UserMenu /> : <AuthIcon />}
    </HeaderLayout>
  );
};
