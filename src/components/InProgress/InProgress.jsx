import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { inProgressDeskSlector, inProgressWoodSlector } from '../../redux/selectors';
import { getProgressDesk, getProgressWood } from '../../redux/operations';

export const InProgress = () => {
  const dispatch = useAppDispatch();
  const inProgressDesks = useAppSelector(inProgressDeskSlector);
  const inProgressWood = useAppSelector(inProgressWoodSlector);
  const [selectedList, setSelectedList] = useState('Кругляк');
  const [selectedWood, setSelectedWood] = useState(null);
  const [showCuttingForm, setShowCuttingForm] = useState(false);
  const [cuttingData, setCuttingData] = useState({
    length: '',
    width: '',
    height: '',
    amount: '',
  });
  const [cuttingItems, setCuttingItems] = useState([]);

  useEffect(() => {
    if (selectedList === 'Кругляк') {
      dispatch(getProgressWood());
    } else if (selectedList === 'Дошка') {
      dispatch(getProgressDesk());
    }
  }, [dispatch, selectedList]);

  const handleWoodClick = (woodItem) => {
    setSelectedWood(woodItem);
    setShowCuttingForm(true);
  };

  const handleCuttingSubmit = (e) => {
    e.preventDefault();
    const newCuttingItem = {
      ...cuttingData,
      code: selectedWood.code,
      name: selectedWood.name,
    };
    setCuttingItems([...cuttingItems, newCuttingItem]);
    setShowCuttingForm(false);
  };

  if (!inProgressDesks || !inProgressWood) {
    return <div>Завантаження...</div>;
  }

  return (
    <div>
      <h2>Товари в роботі</h2>
      <div>
        <button onClick={() => setSelectedList('Кругляк')}>Кругляк</button>
        <button onClick={() => setSelectedList('Дошка')}>Дошка</button>
      </div>
      <ul>
        {selectedList === 'Кругляк' &&
          inProgressWood.map((item) => (
            <li key={item.code} onClick={() => handleWoodClick(item)}>
              {item.name}, Кількість: {item.amount}
            </li>
          ))}
        {selectedList === 'Дошка' &&
          inProgressDesks.map((item) => (
            <li key={item.code}>
              {item.name}, Кількість: {item.amount}
            </li>
          ))}
      </ul>
      {showCuttingForm && selectedWood && (
        <div>
          <p>Як ріжемо?</p>
          <form onSubmit={handleCuttingSubmit}>
            <label>
              Довжина:
              <input
                type="text"
                name="length"
                value={cuttingData.length}
                onChange={(e) =>
                  setCuttingData({ ...cuttingData, length: e.target.value })
                }
              />
            </label>
            <label>
              Ширина:
              <input
                type="text"
                name="width"
                value={cuttingData.width}
                onChange={(e) =>
                  setCuttingData({ ...cuttingData, width: e.target.value })
                }
              />
            </label>
            <label>
              Висота:
              <input
                type="text"
                name="height"
                value={cuttingData.height}
                onChange={(e) =>
                  setCuttingData({ ...cuttingData, height: e.target.value })
                }
              />
            </label>
            <label>
              Кількість:
              <input
                type="text"
                name="amount"
                value={cuttingData.amount}
                onChange={(e) =>
                  setCuttingData({ ...cuttingData, amount: e.target.value })
                }
              />
            </label>
            <button type="submit">Порізка</button>
          </form>
        </div>
      )}
      <h3>Список порізки:</h3>
      <ul>
        {cuttingItems.map((item, index) => (
          <li key={index}>
            {item.name}, Довжина: {item.length}, Ширина: {item.width}, Висота: {item.height}, Кількість: {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};