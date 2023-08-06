import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { boardSelector, roundWoodSelector } from '../../redux/selectors';
import { getRoundWood, getBoard } from '../../redux/operations';

import { Link } from '../../components/Link/Link';
import { RoundWoodItem } from '../../components/RoundWoodList/RoundWoodItem';
import { Outlet } from 'react-router-dom';

import {
  StorageTable,
  DesctiptionList,
  DesctiptionItem,
  RoundWoodList,
} from './WoodStorage.styled';

export const WoodStorage: FC = () => {
  const dispatch = useAppDispatch();
  const roundWood = useAppSelector(roundWoodSelector);
  const desctiption = ['Назва', 'Діаметр', 'Кількість', 'Штрихкод'];
  // const board = useAppSelector(boardSelector);

  useEffect(() => {
    dispatch(getRoundWood());
    dispatch(getBoard());
  }, [dispatch]);

  return (
    <>
      <StorageTable>
        <Link to="round">Кругляк</Link>
        <Link to="board">Дошка</Link>
        <Link to="pallets">Палети</Link>
        <Outlet />
        <DesctiptionList>
          {desctiption.map((el, index) => {
            return <DesctiptionItem key={index}>{el}</DesctiptionItem>;
          })}
        </DesctiptionList>
        <RoundWoodList>
          {roundWood.map(({ name, diametr, code, amount, id }) => {
            return (
              <RoundWoodItem
                key={id}
                name={name}
                diametr={diametr}
                code={code}
                amount={amount}
                id={id}
              />
            );
          })}
        </RoundWoodList>
      </StorageTable>
    </>
  );
};
