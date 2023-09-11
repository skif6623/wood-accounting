import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { refreshCurrentUser } from '../redux/auth/operations';

import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

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
import { SearchRWprogress } from './RoundWood/SearchRWprogress/SearchRWprogress';
import { StorageRoute } from './Routes/StorageRoute';
import { BoardRoute } from './Routes/BoardRoute';
import { PalletsRoute } from './Routes/PalletsRoute';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/login"
          element={
            <RestrictedRoute
              type="login"
              component={LoginPage}
              redirectTo="/"
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              type="register"
              component={RegisterPage}
              redirectTo="/login"
            />
          }
        />
        <Route
          index
          element={<PrivateRoute component={StorageRoute} to="/login" />}
        />
        <Route
          path="/board"
          element={<PrivateRoute component={BoardRoute} to="/login" />}
        />
        <Route
          path="/pallets"
          element={<PrivateRoute component={PalletsRoute} to="/login" />}
        />
        <Route
          path="/choose-wood"
          element={<PrivateRoute component={ChooseWoodType} to="/login" />}
        />
        <Route
          path="/round-wood"
          element={<PrivateRoute component={AddWoodItemsForm} to="/login" />}
        />
        <Route
          path="/board-wood"
          element={<PrivateRoute component={AddDeskItemsForm} to="/login" />}
        />
      </Route>
    </Routes>
  );
};

//  <Routes>
//     <Route path="/" element={<SharedLayout />}>
//       <Route path="/" element={<WoodStorage />}>
//         <Route index element={<RoundWoodList />} />
//         <Route path="board" element={<BoardList />} />
//         <Route path="pallets" element={<ProductionItemList />} />
//       </Route>
//       <Route path="/choose-wood" element={<ChooseWoodType />} />
//       <Route path="/round-wood" element={<AddWoodItemsForm />} />
//       <Route path="/board-wood" element={<AddDeskItemsForm />} />
//       <Route path="/round-wood-progress" element={<SearchRWprogress />} />
//     </Route>
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/register" element={<RegisterPage />} />
//     <Route path="*" element={<p>тут ніхуя нема скільки не дивись</p>} />
//   </Routes>
