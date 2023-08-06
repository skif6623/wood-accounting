import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

interface MenuProps {
  open: boolean;
}

export const MenuLayout = styled.div<MenuProps>`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  padding-top: 40px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;

  background: rgb(66, 225, 153);
  background: linear-gradient(
    90deg,
    rgba(66, 225, 153, 1) 0%,
    rgba(59, 179, 184, 1) 100%
  );

  transform: ${({ open }) => (open ? 'translate(0)' : 'translate(-100%)')};
  transition: transform 500ms ease;

  @media screen and (max-width: 320px) {
    width: 80%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  padding: 5px 10px;

  text-decoration: none;
  font-size: 25px;
  font-weight: 500;

  color: #ffffff;

  transition: background-color 250ms ease, color 250ms ease,
    border-radius 250ms ease;

  &:hover,
  &:focus {
    color: #3bb3b8;

    background-color: white;
    border-radius: 50px;
  }

  &:active {
    background-color: #e6e0e0;
  }

  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 30px;
  height: 30px;

  color: white;

  transition: background-color 250ms ease, color 250ms ease,
    border-radius 250ms ease;

  &:hover,
  &:focus {
    color: #3bb3b8;

    background-color: #ffffff;
    border-radius: 50px;
  }
`;
