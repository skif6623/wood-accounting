import React, { FC, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  MenuLayout,
  Navigation,
  Link,
  CloseIcon,
} from './Menu.styled';

import type { HeaderTypes } from '../Header/Header';

const menuRoot = document.querySelector('#menu-root') as HTMLDivElement;

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
    if (e.currentTarget === e.target) {
      toggle();
    }
  };

  return createPortal(
    <Backdrop open={isOpen} onClick={handleClick}>
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
    </Backdrop>,
    menuRoot
  );
};
