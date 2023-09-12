import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { inProgressDeskSlector } from '../../redux/selectors';
import { getProgressDesk, getProgressWood } from '../../redux/operations';

export const InProgress = () => {
  const dispatch = useAppDispatch();
  const inProgressDesks = useAppSelector(inProgressDeskSlector);

  useEffect(() => {
    dispatch(getProgressDesk());
  }, [dispatch]);

  if (!inProgressDesks) {
    return <div>Завантаження...</div>;
  }

  return (
    <div>
      <h2>Дошкка в роботі</h2>
      <ul>
        {inProgressDesks.map((item) => (
          <li key={item.code}>
            {item.name}, Кількість: {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};