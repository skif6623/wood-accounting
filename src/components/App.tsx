import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AddWood } from '../Pages/AddWood';
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RoundWoodList } from './RoundWoodList/RoundWoodList';
import { BoardList } from './BoardList/BoardList';
import { ChooseWoodType } from '../Pages/ChooseWoodType/ChooseWoodType';
import { AddItemsForm } from '../Pages/AddItemsForm/AddItemsForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<WoodStorage />}>
          <Route index element={<RoundWoodList />} />
          <Route path="board" element={<BoardList />} />
          <Route path="pallets" element={<h1>Піддони</h1>} />
        </Route>
        <Route path="/choose-wood" element={<ChooseWoodType />} />
        <Route path="/round-wood" element={<AddItemsForm />} />
        <Route path="/board-wood" element={<AddItemsForm />} />
      </Route>
    </Routes>
  );
};
