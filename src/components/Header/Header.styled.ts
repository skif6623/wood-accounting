import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';

import type { MenuProps } from '../Menu/Menu.styled';

export const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;

  background: rgb(66, 225, 153);
  background: linear-gradient(
    90deg,
    rgba(66, 225, 153, 1) 0%,
    rgba(59, 179, 184, 1) 100%
  );

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 20px 30px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const OpenMenuIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;

  color: #ffffff;

  transition: color 250ms ease;
`;

export const AuthIcon = styled(BiUserCircle)`
  width: 40px;
  height: 40px;

  color: #ffffff;
  border-radius: 50%;

  &:hover,
  &:focus {
    color: #3bb3b8;
    background-color: #ffffff;
  }

  &:active {
    background-color: #e6e0e0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  border-radius: 50%;

  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #ffffff;

    & > ${OpenMenuIcon} {
      color: #3bb3b8;
    }
  }

  &:active {
    background-color: #e6e0e0;
  }
`;

export const LogoImage = styled.img<MenuProps>`
  width: 150px;

  transition: transform 500ms ease;

  @media screen and (min-width: 350px) {
    width: 180px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;

    transform: ${({ open }) => (open ? 'translate(70%)' : 'translate(0)')};
  }
`;
