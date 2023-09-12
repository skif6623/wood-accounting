import { FormEvent, useState, FC } from 'react';
import { Button } from '../Button/Button';
import { ReusableInput } from '../Input/Input';
import { Form } from './TakeToWorkForm.styled';
import axios from 'axios';


interface TakeToWorkProps {
  name: string;
  id: string;
}

export const TakeToWorkForm: FC<TakeToWorkProps> = ({ name, id }) => {
  const [amount, setAmount] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount === '' || amount === '0') {
      return;
    }

    try {
      setIsSending(true);

      // Створюємо об'єкт з оновленою кількістю товару
      const updatedItem = {
        _id: id,  // Зберігаємо _id товару для ідентифікації
        amount: parseInt(amount, 10), // Оновлена кількість товару, перетворена в число
      };

      // Відправляємо PUT-запит на бекенд
      const res = await axios.put(`/desks/${id}`, updatedItem);
      console.log(id);
      
      console.log('Успішно відправлено на бекенд:', res.data);

      // Очищаємо вміст поля amount після відправки
      setAmount('');
    } catch (error) {
      console.error('Помилка при відправці на бекенд:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ReusableInput action={setAmount} count={amount} />
      <Button type="submit">Взяти в роботу</Button>
    </Form>
  );
};



// export const AddWoodItemsForm = () => {
//   const [diametr, setDiametr] = useState('');
//   const [amount, setAmount] = useState('');
//   const [name, setName] = useState('');
//   const [code, setCode] = useState('');
//   const [checked, setChecked] = useState(false);
//   const [status, setStatus] = useState('на складі');
//   const [addedItems, setAddedItems] = useState<roundWoodItem[]>([]);
//   const [isSending, setIsSending] = useState(false);

//   const isItems = addedItems.length !== 0 ? 'show' : 'hide';

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (name === '' || code === '' || diametr === '' || amount === '') {
//       console.log('Заповніть всі поля');
//       return;
//     }

//     const newItem: roundWoodItem = {
//       diametr: +diametr,
//       amount: +amount,
//       code,
//       name,
//       checked,
//       status,
//     };

//     setAddedItems(prev => [...prev, newItem]);
//     clearData();
//   };


//   const handleSendToBackend = async () => {
//     try {
//       setIsSending(true);
//       for (const item of addedItems) {
//         const res = await axios.post('/wood', item);
//         console.log('Успешно отправлено на бэкенд:', res.data);
//       }
//       setAddedItems([]);
//       clearData();
//     } catch (error) {
//       console.error('Ошибка при отправке на бэкенд:', error);
//     } finally {
//       setIsSending(false);
//     }
//   };

//   const clearData = () => {
//     setDiametr('');
//     setAmount('');
//     setName('');
//     setCode('');
//     setChecked(false);

//   };