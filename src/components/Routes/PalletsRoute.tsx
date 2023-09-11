import { Routes, Route } from 'react-router-dom';
import { WoodStorage } from '../../Pages/WoodStorage/WoodStorage';
import { ProductionItemList } from '../FinalProduct/ProductList/ProductList';

export const PalletsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<WoodStorage />}>
        <Route index element={<ProductionItemList />} />
      </Route>
    </Routes>
  );
};
