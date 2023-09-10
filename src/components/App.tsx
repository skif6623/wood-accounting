import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RoundWoodList } from './RoundWood/RoundWoodList/RoundWoodList';
import { BoardList } from './Boards/BoardList/BoardList';
import { ProductionItemList } from './FinalProduct/ProductList/ProductList';
import { ChooseWoodType } from '../Pages/ChooseWoodType/ChooseWoodType';
import { AddWoodItemsForm } from '../Pages/AddItems/AddWoodItems';
 import { AddDeskItemsForm } from '../Pages/AddItems/AddDesksItems';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks/hooks';
import { SearchRWprogress } from './RoundWood/SearchRWprogress/SearchRWprogress';


export const App: React.FC = () => {

  const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn);


  
  return (

    <div>
      {/* <Routes>
      {!isLoggedIn && <Route index element={<LoginPage />} />}
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes> */}
      
      
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<WoodStorage />}>
            <Route index element={<RoundWoodList />} />
            <Route path="board" element={<BoardList />} />
            <Route path="pallets" element={<ProductionItemList />} />
          </Route>
          <Route path="/choose-wood" element={<ChooseWoodType />} />
          
          <Route path="/round-wood" element={<AddWoodItemsForm />} />
          <Route path="/board-wood" element={<AddDeskItemsForm/>} />
          <Route path="/round-wood-progress" element={<SearchRWprogress/> } />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
         <Route path="*" element={<p>тут ніхуя нема скільки не дивись</p>}/>
      </Routes>
    </div>
  );
};
