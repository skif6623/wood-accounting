import React from 'react';
import { Routes, NavLink, Route } from 'react-router-dom';
// import { HomePage } from '../Pages/HomePage';
import { AddWood } from '../Pages/AddWood';
// import {WoodProcessing} from "../Pages/WoodProcesing";
// import {AllWood} from "../Pages/AllWood";
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route path="/add" element={<AddWood />} />
      {/* <Route path="/woodProcesing" element={<WoodProcessing />} /> */}
      <Route path="/storage" element={<WoodStorage />}>
        <Route path="round" element={<h1>Кругляк</h1>} />
        <Route path="board" element={<h1>Дошка</h1>} />
        <Route path="pallets" element={<h1>Палети</h1>} />
      </Route>
    </Routes>
  );
};
