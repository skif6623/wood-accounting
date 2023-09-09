import React, { useEffect, useState } from "react";
import { getRoundWood } from "../../../redux/operations";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { roundWoodSelector } from "../../../redux/selectors";
import type { roundWoodItem } from "../../../redux/roundWoodSlice";

export const SearchRWprogress = () => {
  const dispatch = useAppDispatch();
  const roundWood = useAppSelector(roundWoodSelector);
  const [filterCode, setFilterCode] = useState<string | null>(null); 
  const [selectedItems, setSelectedItems] = useState<roundWoodItem[]>([]);
  const [inputAmount, setInputAmount] = useState<string>("");

  useEffect(() => {
    dispatch(getRoundWood());
  }, [dispatch]);

  const filteredRoundWood = roundWood.filter((item) =>
    item.code.includes(filterCode || "") 
  );

  const handleAddToSelected = (item: roundWoodItem) => {
    const amount = parseInt(inputAmount);
    if (!isNaN(amount)) {
      // Перевірка, чи товар з таким кодом вже існує в обраному списку
      const existingItemIndex = selectedItems.findIndex((selectedItem) => selectedItem.code === item.code);

      if (existingItemIndex !== -1) {
        // Якщо товар із таким кодом вже існує, збільшуємо його кількість
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems[existingItemIndex].amount += amount;
        setSelectedItems(updatedSelectedItems);
      } else {
        // Якщо товар із таким кодом ще не існує, додаємо його до списку
        const updatedItem = { ...item, amount };
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, updatedItem]);
      }

      setInputAmount("");
    }
  };

  const handleSubtractQuantity = (item: roundWoodItem) => {
    const index = selectedItems.findIndex((selectedItem) => selectedItem.code === item.code);
    if (index !== -1) {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.splice(index, 1);
      setSelectedItems(updatedSelectedItems);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введи штрихкод"
        value={filterCode || ""}
        onChange={(e) => setFilterCode(e.target.value || null)}
      />

      <ul>
        {filteredRoundWood.map((item) => (
          <li key={item.code}>
            Порода {item.name} Штрихкод {item.code} Діаметр {item.diametr}
            <input
              type="number"
              placeholder="Кількість"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <button onClick={() => handleAddToSelected(item)}>Взяти в роботу</button>
            <button onClick={() => handleSubtractQuantity(item)}>Відмінити</button>
          </li>
        ))}
      </ul>

      <h2>Вибрані товари:</h2>
      <ul>
        {selectedItems.map((selectedItem) => (
          <li key={selectedItem.code}>
            Порода {selectedItem.name} Штрихкод {selectedItem.code} Діаметр {selectedItem.diametr} Кількість {selectedItem.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};