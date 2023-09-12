import React from 'react';
import { WoodStorage } from '../../Pages/WoodStorage/WoodStorage';
import { RoundWoodList } from '../RoundWood/RoundWoodList/RoundWoodList';
import { Route, Routes } from 'react-router-dom';

export const StorageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<WoodStorage />}>
        <Route index element={<RoundWoodList />} />
      </Route>
    </Routes>
  );
};
