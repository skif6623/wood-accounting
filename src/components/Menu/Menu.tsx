import React, { useState } from 'react';
import { MenuLayout, Navigation, Link, CloseIcon } from './Menu.styled';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuLayout open={isOpen}>
      <Navigation>
        <Link to="/">Головна</Link>
        <Link to="/add">Приход кругляку</Link>
        <Link to="/bar">Панель</Link>
        <Link to="/inProgress">В роботі</Link>
        <Link to="/storage">Склад</Link>
      </Navigation>
      <CloseIcon
        onClick={() => {
          handleClickToggle();
        }}
      />
    </MenuLayout>
  );
};
