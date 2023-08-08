import React, { FC } from 'react';
import { MenuLayout, Navigation, Link, CloseIcon } from './Menu.styled';

import type { HeaderTypes } from '../Header/Header';

export const Menu: FC<HeaderTypes> = ({ isOpen, toggle }) => {
  return (
    <MenuLayout open={isOpen}>
      <Navigation>
        <Link to="/">Склад</Link>
        <Link to="/add">Приход кругляку</Link>
        <Link to="/inProgress">В роботі</Link>
      </Navigation>
      <CloseIcon
        onClick={() => {
          toggle();
        }}
      />
    </MenuLayout>
  );
};
