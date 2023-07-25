import React, { useState } from "react";
import woodData from "../components/fakeWoodData/wood.json";

export const AllWood = () => {

  const [woodItems, setWoodItems] = useState(woodData);
  const [inputAmounts, setInputAmounts] = useState<{ [id: string]: number }>({});
  const [selectedItemsData, setSelectedItemsData] = useState<any[]>([]);
  const [historyData, setHistoryData] = useState<any[]>([]);


  const handleDeleteSelectedItems = () => {
    const dataToDelete = selectedItemsData.map((item) => ({ ...item, realDate: new Date().toISOString() }));
    setHistoryData((prevHistoryData) => [...prevHistoryData, ...dataToDelete]);
    setSelectedItemsData([]);
  };

const handleAddToSelectedItemsData = (id: string) => {
  const selectedItem = woodItems.find((item) => item.id === id);
  if (selectedItem && inputAmounts[id] && inputAmounts[id] > 0) {
    const updatedWoodItems = woodItems.map((item) =>
      item.id === id
        ? {
            ...item,
            amount: item.amount - inputAmounts[id],
          }
        : item
    );

    if (selectedItemsData.some((item) => item.id === id)) {
      setSelectedItemsData((prevData) =>
        prevData.map((item) =>
          item.id === id
            ? {
                ...item,
                amount: item.amount + inputAmounts[id],
              }
            : item
        )
      );
    } else {
      setSelectedItemsData((prevData) => [...prevData, { ...selectedItem, amount: inputAmounts[id] }]);
    }

    setInputAmounts((prevAmounts) => ({ ...prevAmounts, [id]: 0 }));
    setWoodItems(updatedWoodItems);
  }
};

  return (
    <div>
      <ul>
        {woodItems.map((item) => (
          <li key={item.id}>
                <p>Діаметр: {item.diametr}</p>
                <p>порода: {item.name}</p> 
                <p>кількість: {item.amount}</p>
                <p>Штрихкод: {item.id}</p>
            <input
              type="number"
              value={inputAmounts[item.id] || 0}
              onChange={(e) =>
                setInputAmounts((prevAmounts) => ({ ...prevAmounts, [item.id]: parseInt(e.target.value) }))
              }
            />
            <button onClick={() => handleAddToSelectedItemsData(item.id)}>Відвантажити</button>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteSelectedItems}>Відвантажити вибраний продукт Реалізовано</button>

      <h2>Вибрані елементи:</h2>
      <ul>
        {selectedItemsData.map((item) => (
          <li key={item.id}>
            Діаметр: {item.diametr}, порода: {item.name}, кількість: {item.amount}, id: {item.id}
          </li>
        ))}
      </ul>

      <h2>Історія реалізації:</h2>
      <ul>
        {historyData.map((item) => (
          <li key={item.index}>
            Діаметр: {item.diametr}, порода: {item.name}, кількість: {item.amount}, id: {item.id}, Реалізовано:
            {item.realDate}
          </li>
        ))}
      </ul>
    </div>
  );
};