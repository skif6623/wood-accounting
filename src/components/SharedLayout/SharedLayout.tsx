import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { Menu } from '../Menu/Menu';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
//  import { RoundWoodList } from '../RoundWoodList/RoundWoodList';

export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header isOpen={isOpen} toggle={handleClickToggle} />
      <Menu isOpen={isOpen} toggle={handleClickToggle} />

      <p>тимчасова панель </p>
      <ul>
      <li><Link to="/register">Реєстрація</Link></li>
      <li><Link to="/wood">Кругляк</Link></li>
      <li><Link to="/desks">Дощка</Link></li>
      <li><Link to="/production">Продукція</Link></li>
      <li><Link to="/login">Логін</Link></li>
      </ul>
      
      {/* <RoundWoodList /> */}
      <Outlet />
    </>
  );
};
