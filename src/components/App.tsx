import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { refreshCurrentUser } from '../redux/auth/operations';
import { refreshSelector } from '../redux/selectors';

import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { ChooseWoodType } from '../Pages/ChooseWoodType/ChooseWoodType';
import { AddWoodItemsForm } from '../Pages/AddItems/AddWoodItems';
import { AddDeskItemsForm } from '../Pages/AddItems/AddDesksItems';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { InProgress } from './InProgress/InProgress';
// import { SearchRWprogress } from './RoundWood/SearchRWprogress/SearchRWprogress';
import { StorageRoute } from './Routes/StorageRoute';
import { BoardRoute } from './Routes/BoardRoute';
import { PalletsRoute } from './Routes/PalletsRoute';

export const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(refreshSelector);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return !isRefreshing ? (
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
        <Route
          path="/woodProcesing"
          element={<PrivateRoute component={InProgress} to="/login" />}
        />
        <Route path="*" element={<p>тут нічого нема скільки не дивись</p>} />
      </Route>
    </Routes>
  ) : null;
};
