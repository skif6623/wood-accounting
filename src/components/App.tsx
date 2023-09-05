import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import { AddWood } from '../Pages/AddWood';
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { RoundWoodList } from './RoundWoodList/RoundWoodList';
// import { BoardList } from './BoardList/BoardList';
// import { ChooseWoodType } from '../Pages/ChooseWoodType/ChooseWoodType';
import { AddItemsForm } from '../Pages/AddItems/AddItems';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getRoundWood } from '../redux/operations';


export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(getRoundWood())

  }, [dispatch]);
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {!isLoggedIn ? (
            <>
              <Route index element={<WoodStorage />} />
              <Route path="round-wood" element={<AddItemsForm />} />
              <Route path="board-wood" element={<AddItemsForm />} />
            </>
          ) : (
            <Navigate to="/login" />
          )}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};


    // <div>
    // <Routes>
    //   {/* {!isLoggedIn && <Route index element={<LoginPage />} />} */}
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route index element={<RegisterPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //   </Route>
    // </Routes>
    // <Routes>
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route path="/" element={<WoodStorage />}>
    //       <Route index element={<RoundWoodList />} />
    //       <Route path="board" element={<BoardList />} />
    //       <Route path="pallets" element={<h1>Піддони</h1>} />
    //     </Route>
    //     <Route path="/choose-wood" element={<ChooseWoodType />} />
    //     <Route path="/round-wood" element={<AddItemsForm />} />
    //     <Route path="/board-wood" element={<AddItemsForm />} />
    //   </Route>
    //   </Routes>
    //   </div>