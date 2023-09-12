import { Routes, Route } from 'react-router-dom';
import { BoardList } from '../Boards/BoardList/BoardList';
import { WoodStorage } from '../../Pages/WoodStorage/WoodStorage';

export const BoardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<WoodStorage />}>
        <Route index element={<BoardList />} />
      </Route>
    </Routes>
  );
};
