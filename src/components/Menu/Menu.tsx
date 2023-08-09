import React, { FC, useEffect, useCallback } from 'react';
import { MenuLayout, Navigation, Link, CloseIcon } from './Menu.styled';

import type { HeaderTypes } from '../Header/Header';

export const Menu: FC<HeaderTypes> = ({ isOpen, toggle }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        toggle();
      }
    },
    [toggle]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleClick = (e: any) => {
    const targetMenu = e.target;
    if (e.target !== targetMenu) {
      console.log('закрито');
    } else {
      console.log('відкрито');
    }
  };

  return (
    <MenuLayout open={isOpen} onClick={handleClick}>
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
