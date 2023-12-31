import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { roundWoodSelector } from '../../../redux/selectors';
import { getRoundWood } from '../../../redux/operations';

import { RoundWoodItem } from '../../RoundWood/RoundWoodItem/RoundWoodItem';
import { DesctiptionList, DesctiptionItem, List } from './RoundWoodList.styled';

export const RoundWoodList: FC = () => {
  const dispatch = useAppDispatch();
  const roundWood = useAppSelector(roundWoodSelector);
  const desctiption = ['Назва', 'Діаметр', 'Кількість', 'Штрихкод'];

  
  useEffect(() => {
    console.log(dispatch(getRoundWood()));
    
    dispatch(getRoundWood())

  }, [dispatch]);
  console.log(roundWood);
  
  return (
    <>
      <DesctiptionList>
        {desctiption.map((el, index) => {
          return <DesctiptionItem key={index}>{el}</DesctiptionItem>;
        })}
      </DesctiptionList>
      <List>
        {roundWood.map(({ name, diametr, code, amount, checked, status, length, _id}) => {
          return (
            <RoundWoodItem
              key={code}
              name={name}
              diametr={diametr}
              code={code}
              amount={amount}
              checked={checked}
              status={status}
              length={length}
              _id={_id}              
            />
          );
        })}
      </List>
    </>
  );
};
