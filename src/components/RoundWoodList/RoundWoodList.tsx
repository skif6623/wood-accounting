import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { roundWoodSelector } from '../../redux/selectors';
import { getRoundWood } from '../../redux/operations';

import { RoundWoodItem } from '../RoundWoodItem/RoundWoodItem';
import { DesctiptionList, DesctiptionItem, List } from './RoundWoodList.styled';

export const RoundWoodList: FC = () => {
  const dispatch = useAppDispatch();
  const roundWood = useAppSelector(roundWoodSelector);
  const desctiption = ['Назва', 'Діаметр', 'Кількість', 'Штрихкод'];

  useEffect(() => {
    dispatch(getRoundWood());
  }, [dispatch]);

  return (
    <>
      <DesctiptionList>
        {desctiption.map((el, index) => {
          return <DesctiptionItem key={index}>{el}</DesctiptionItem>;
        })}
      </DesctiptionList>
      <List>
        {roundWood.map(({ name, diametr, code, amount, checked, status, owner}) => {
          return (
            <RoundWoodItem
              key={code}
              name={name}
              diametr={diametr}
              code={code}
              amount={amount}
              checked={checked}
              status={status}
              owner={owner}
            />
          );
        })}
      </List>
    </>
  );
};
