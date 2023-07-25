import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWoodItem } from "../redux/features/addWoodSlice";

// Інтерфейс для елемента деревини
interface WoodItem {
  diametr: number;
  name: string;
  amount: number;
  id: number;
}

export const AddWood = () => {
  const dispatch = useDispatch();

  const [woodItems, setWoodItems] = useState<WoodItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const diametr = form.diametr.value;
    const amount = form.amount.value;
    const poroda = form.poroda.value;

    // Створюємо новий об'єкт для елемента деревини з отриманими значеннями
    const newItem: WoodItem = {

      diametr: Number(diametr),
      amount: Number(amount),
        name: { poroda:},
    id: Date.now(),
    };

    // Додаємо новий елемент деревини до масиву через React state
    setWoodItems((prevItems) => [...prevItems, newItem]);

    // Додаємо новий елемент деревини до масиву через Redux
    dispatch(addWoodItem(newItem));

    // Очищуємо поля форми після додавання
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Діаметр:
        <input type="number" name="diametr" />
      </label>
      <label>
        Порода:
        <input type="text" name="sort" />
      </label>
      <label>
        Кількість:
        <input type="number" name="amount" />
      </label>
      <label>
        Штрихкод:
        <input type="text" name="poroda" />
      </label>
      <input type="submit" value="Додати" />
      <h2>Додані елементи:</h2>
      <ul>
        {woodItems.map((item: WoodItem) => (
          <li key={item.id}>
            Діаметр: {item.diametr}, порода: {item.sort}, кількість: {item.amount}, Штрихкод: {item.poroda}
          </li>
        ))}
      </ul>
    </form>
  );
};