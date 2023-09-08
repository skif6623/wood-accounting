import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { productionSlector } from '../../../redux/selectors';
import { getProduction } from '../../../redux/operations';
import { ProdactionItem } from '../ProductItem/ProductItem';
import { DesctiptionList, DesctiptionItem, List } from './ProductListStyled';

export const ProductionItemList: FC = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(productionSlector);
  const desctiption = ['Назва', 'Діаметр', 'Кількість', 'Штрихкод'];

  
  useEffect(() => {

    dispatch(getProduction())
console.log(dispatch(getProduction()));

  }, [dispatch]);
 
  
  return (
    <>
      <DesctiptionList>
        {desctiption.map((el, index) => {
          return <DesctiptionItem key={index}>{el}</DesctiptionItem>;
        })}
      </DesctiptionList>
      <List>
        {board.map(({name, code, amount}) => {
          return (
            <ProdactionItem
              amount={amount}
              code={code}
              name={name}
            />
          );
        })}
      </List>
    </>
  );
};
