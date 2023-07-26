import React, { useState } from "react";
import RoundwoodButton from "../components/buttons/RoundwoodButton";
import BoardButton from "../components/buttons/BoardButton";
import woodData from "../fakeWoodData/wood.json";
import descsData from "../fakeWoodData/descs.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setRoundwoodArray, setBoardArray, WoodItem } from "../redux/allWoodSlice";

export const WoodProcesing = () => {

  const dispatch = useDispatch();
  const roundwoodArray = useSelector((state: RootState) => state.wood.roundwoodArray);
  const boardArray = useSelector((state: RootState) => state.wood.boardArray);

  // Ваші початкові масиви кругляка та дошки
  const initialRoundwoodData: WoodItem[] = woodData;

  const initialBoardData: WoodItem[] = woodData

  // Функції обробки кліку на кнопках
  const handleRoundwoodClick = () => {
    dispatch(setRoundwoodArray(initialRoundwoodData));
  };

  const handleBoardClick = () => {
    dispatch(setBoardArray(initialBoardData));
  };

  return (
    <div>
      <RoundwoodButton onClick={handleRoundwoodClick} />
      <BoardButton onClick={handleBoardClick} />

      {/* Відображення масивів "Кругляк" та "Дошка" */}
      <div>
        <h2>Кругляк</h2>
        <ul>
          {roundwoodArray.map((item:any) => (
            <li key={item.id}>
              Діаметр: {item.diametr}, Порода: {item.name}, Кількість: {item.amount}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Дошка</h2>
        <ul>
          {boardArray.map((item:any) => (
            <li key={item.id}>
              Ширина: {item.width}, Висота: {item.height}, Довжина: {item.length}, Кількість: {item.amount}, Тип: {item.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
