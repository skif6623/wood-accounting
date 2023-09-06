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
        {board.map(({ id, type, width, code, amount, height, length}) => {
          return (
            <BoardItem
              id={code}
              amount={amount}
              code={code}
              height={height}
              length={length}
              name={type}
              width={width}
              type={type} />
            



            // <BoardItem
            //   key={id}
            //   name={type}
            //   width={width}
            //   code={code}
            //   amount={amount}
            //   height={height}
            //   length={length}
            //   // id={code}
            // />
          );
        })}
      </List>
    </>
  );
};












// import React, { FC, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
// import { boardSelector } from '../../../redux/selectors';
// import { getBoard } from '../../../redux/operations';

// export const BoardList: FC = () => {
//   const dispatch = useAppDispatch();
//   const board = useAppSelector(boardSelector);

//   useEffect(() => {
//     dispatch(getBoard());
//   }, [dispatch]);

//   return (
//     <ul>
//       {board.map(item => {
//         return (
//           <li key={item.id}>
//             <p>{item.amount}</p>
//             <p>{item.height}</p>
//             <p>{item.width}</p>
//             <p>{item.length}</p>
//             <p>{item.type}</p>
//             <p>{item.id}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
