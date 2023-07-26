import React, { useState } from "react";
import RoundwoodButton from "../components/buttons/RoundwoodButton";
import BoardButton from "../components/buttons/BoardButton";
import woodData from "../fakeWoodData/wood.json";
import descsData from "../fakeWoodData/descs.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setRoundwoodArray, setBoardArray, WoodItem, DescItem } from "../redux/allWoodSlice";

export const WoodProcessing = () => {
  const dispatch = useDispatch();
  const roundwoodArray = useSelector((state: RootState) => state.wood.roundwoodArray);
  const boardArray = useSelector((state: RootState) => state.wood.boardArray);

  const [showRoundwood, setShowRoundwood] = useState(false);
  const [showBoard, setShowBoard] = useState(false);
  const [roundwoodFilter, setRoundwoodFilter] = useState("");
  const [boardFilter, setBoardFilter] = useState("");

  // Ваші початкові масиви кругляка та дошки
  const initialRoundwoodData: WoodItem[] = woodData;
  const initialBoardData: DescItem[] = descsData;

  // Функції обробки кліку на кнопках
  const handleRoundwoodClick = () => {
    setShowRoundwood(true);
    setShowBoard(false);
    dispatch(setRoundwoodArray(initialRoundwoodData));
  };

  const handleBoardClick = () => {
    setShowRoundwood(false);
    setShowBoard(true);
    dispatch(setBoardArray(initialBoardData));
  };

  // Функції фільтрації списків
  const handleRoundwoodFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoundwoodFilter(event.target.value);
  };

  const handleBoardFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardFilter(event.target.value);
  };

  return (
    <div>
      {!showRoundwood && !showBoard && <h2>Що різати будемо?</h2>}
      {!showRoundwood && !showBoard && (
        <div>
          <RoundwoodButton onClick={handleRoundwoodClick} />
          <BoardButton onClick={handleBoardClick} />
        </div>
      )}

      {/* Відображення масивів "Кругляк" та "Дошка" */}
      {showRoundwood && (
        <div>
          <h2>Кругляк</h2>
          <input type="text" value={roundwoodFilter} onChange={handleRoundwoodFilterChange} placeholder="Фільтр по id" />
          <ul>
            {roundwoodArray
              .filter((item: any) => item.id.includes(roundwoodFilter))
              .map((item: any) => (
                <li key={item.id}>
                  Штрихкод: {item.id} Діаметр: {item.diametr}, Порода: {item.name}, Кількість: {item.amount}
                </li>
              ))}
          </ul>
        </div>
      )}

      {showBoard && (
        <div>
          <h2>Дошка</h2>
          <input type="text" value={boardFilter} onChange={handleBoardFilterChange} placeholder="Фільтр по id" />
          <ul>
            {boardArray
              .filter((item: any) => item.id.includes(boardFilter))
              .map((item: any) => (
                <li key={item.id}>
                  Ширина: {item.width}, Висота: {item.height}, Довжина: {item.length}, Кількість: {item.amount}, Тип: {item.type}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};