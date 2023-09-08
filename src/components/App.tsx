import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import { AddWood } from '../Pages/AddWood';
import { WoodStorage } from '../Pages/WoodStorage/WoodStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RoundWoodList } from './RoundWood/RoundWoodList/RoundWoodList';
import { BoardList } from './Boards/BoardList/BoardList';
import { ProductionItemList } from './FinalProduct/ProductList/ProductList';
import { ChooseWoodType } from '../Pages/ChooseWoodType/ChooseWoodType';
import { AddItemsForm } from '../Pages/AddItems/AddItems';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks/hooks';


export const App: React.FC = () => {

  const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn);



  // useEffect(() => {
  //   console.log(dispatch(getRoundWood()));
    
  //   dispatch(getRoundWood())

  // }, [dispatch]);

  
  
  return (
    //     <div>
    //       <Routes>
    //         <Route path="/" element={<SharedLayout />}>
    //               <Route index element={<WoodStorage />} />
    //               <Route path="wood" element={<RoundWoodList />} />
    //               <Route path="board-wood" element={<AddItemsForm />} />
    //         </Route>

    //         <Route path="/login" element={<LoginPage />} />
    //         <Route path="/register" element={<RegisterPage />} />
    //         <Route path="*" element={<p>тут ніхуя нема скільки не дивись</p>} />
    //       </Routes>

      
    //     </div>
    //   );
    // };


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
          <Route path="/add" element={<AddItemsForm />} />
          <Route path="/board-wood" element={<AddItemsForm />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
         <Route path="*" element={<p>тут ніхуя нема скільки не дивись</p>}/>
      </Routes>
    </div>
  );
};
