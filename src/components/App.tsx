import React from 'react';
import { Routes, NavLink, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { AddWood } from '../Pages/AddWood';
import { Menu } from './Menu/Menu';
import { Header } from './Header/Header';
// import {WoodProcessing} from "../Pages/WoodProcesing";
// import {AllWood} from "../Pages/AllWood";
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Головна сторінка</NavLink>
        <NavLink to="/header">Header</NavLink>
        <NavLink to="/bar">pannel</NavLink>
        <NavLink to="/add">Приход кругляку</NavLink>
        {/* <NavLink to="/woodProcesing">Взяти в роботу</NavLink> */}
        <NavLink to="/storage">Склад</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddWood />} />
        <Route path="/header" element={<Header />} />
        <Route path="/bar" element={<Menu />} />
        {/* <Route path="/woodProcesing" element={<WoodProcessing />} /> */}
        <Route path="/storage" element={<WoodStorage />}>
          <Route path="round" element={<h1>Кругляк</h1>} />
          <Route path="board" element={<h1>Дошка</h1>} />
          <Route path="pallets" element={<h1>Палети</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
