import React, { useState } from "react";

// Інтерфейс для елемента деревини
// interface WoodItem {
//   id: number;
//   diametr: number;
//   sort: string;
//   amount: number;
//   poroda: string;
// }

export const AddWood = () => {
  // const [woodItems, setWoodItems] = useState<WoodItem[]>([]);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const diametr = form.diametr.value;
  //   const sort = form.sort.value;
  //   const amount = form.amount.value;
  //   const poroda = form.poroda.value;

  //   // Створюємо новий об'єкт для елемента деревини з отриманими значеннями
  //   const newItem: WoodItem = {
  //     id: woodItems.length + 1,
  //     diametr: Number(diametr),
  //     sort,
  //     amount: Number(amount),
  //     poroda,
  //   };

  //   // Додаємо новий елемент деревини до масиву
  //   setWoodItems((prevWoodItems) => [...prevWoodItems, newItem]);

  //   // Очищуємо поля форми після додавання
  //   form.reset();
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Діаметр:
    //     <input type="number" name="diametr" />
    //   </label>
    //   <label>
    //     Порода:
    //     <input type="text" name="sort" />
    //   </label>
    //   <label>
    //     Кількість:
    //     <input type="number" name="amount" />
    //   </label>
    //   <label>
    //     Штрихкод:
    //     <input type="text" name="poroda" />
    //   </label>
    //   <input type="submit" value="Додати" />
    //   <h2>Додані елементи:</h2>
      <ul>
        {/* {woodItems.map((item) => (
          <li key={item.id}>
            Діаметр: {item.diametr}, порода: {item.sort}, кількість: {item.amount}, Штрихкод: {item.poroda}
          </li>
        ))} */}
      </ul>
    // </form>
  );
};