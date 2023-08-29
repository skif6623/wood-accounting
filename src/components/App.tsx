import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AddWood } from '../Pages/AddWood';
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RoundWoodList } from './RoundWoodList/RoundWoodList';
import { BoardList } from './BoardList/BoardList';
import { ChooseWoodType } from '../Pages/ChooseWoodType/ChooseWoodType';
import { AddItemsForm } from '../Pages/AddItems/AddItems';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
// import { RegisterPage, WellcomePage, NotFoundPage } from 'pages';

export const App = () => {
  //  const dispatch = useDispatch()
  // const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);
  //   useEffect(() => {
  //   dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <Routes>
      {/* {!isLoggedIn && <Route index element={<WellcomePage />} />} */}
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
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
    // </Routes>
  );
};
