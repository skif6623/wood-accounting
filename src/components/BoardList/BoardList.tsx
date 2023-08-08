import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { boardSelector } from '../../redux/selectors';
import { getBoard } from '../../redux/operations';

export const BoardList: FC = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(boardSelector);

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  return (
    <ul>
      {board.map(item => {
        return (
          <li key={item.id}>
            <p>{item.amount}</p>
            <p>{item.height}</p>
            <p>{item.width}</p>
            <p>{item.length}</p>
            <p>{item.type}</p>
            <p>{item.id}</p>
          </li>
        );
      })}
    </ul>
  );
};
