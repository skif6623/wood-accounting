import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { boardSelector } from '../../../redux/selectors';
import { getBoard } from '../../../redux/operations';
import { BoardItem } from '../BoardItem/BoardItem';
import { DesctiptionList, DesctiptionItem, List } from './BoardList.styled';

export const BoardList: FC = () => {
  const dispatch = useAppDispatch();
  const board = useAppSelector(boardSelector);
  const desctiption = ['Назва', 'Діаметр', 'Кількість', 'Штрихкод'];

  
  useEffect(() => {
    console.log(dispatch(getBoard()));
    
    dispatch(getBoard())

  }, [dispatch]);
  console.log(board);
  
  return (
    <>
      <DesctiptionList>
        {desctiption.map((el, index) => {
          return <DesctiptionItem key={index}>{el}</DesctiptionItem>;
        })}
      </DesctiptionList>
      <List>
        {board.map(({name, width, code, amount, height, length, _id}) => {
          return (
            <BoardItem
              _id={_id}
              amount={amount}
              code={code}
              height={height}
              length={length}
              name={name}
              width={width}
              checked={false}
              status={'на складі'}
            
            />

          );
        })}
      </List>
    </>
  );
};


//const statusList = ['на складі', 'в роботі']
