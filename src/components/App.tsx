import React from 'react';
import { Routes, NavLink, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { AddWood } from '../Pages/AddWood';
import { Menu } from './Menu/Menu';
// import {WoodProcessing} from "../Pages/WoodProcesing";
// import {AllWood} from "../Pages/AllWood";
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Головна сторінка</NavLink>
        <NavLink to="/bar">Панель управління</NavLink>
        <NavLink to="/add">Приход кругляку</NavLink>
        {/* <NavLink to="/woodProcesing">Взяти в роботу</NavLink> */}
        <NavLink to="/storage">Склад</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddWood />} />
        <Route path="/bar" element={<Menu />} />
        {/* <Route path="/woodProcesing" element={<WoodProcessing />} /> */}
        <Route path="/storage" element={<WoodStorage />} />
      </Routes>
    </div>
  );
};
