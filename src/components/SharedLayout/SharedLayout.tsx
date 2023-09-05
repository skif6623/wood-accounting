import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { Menu } from '../Menu/Menu';
import { Outlet } from 'react-router-dom';
// import RoundWoodLink from '../RoundWood/RoundWood';

export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header isOpen={isOpen} toggle={handleClickToggle} />
      <Menu isOpen={isOpen} toggle={handleClickToggle} />
      {/* <RoundWoodLink /> */}
      <Outlet />
    </>
  );
};
