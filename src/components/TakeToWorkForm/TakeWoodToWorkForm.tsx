import { FormEvent, useState, FC } from 'react';
import { Button } from '../Button/Button';
import { ReusableInput } from '../Input/Input';
import { Form } from './TakeToWorkForm.styled';
import axios from 'axios';


interface TakeWoodToWorkProps {
  name: string;
  id: string;
  length: number;
  diametr: number;
  amount: number;
  checked: boolean;
  status: string;
  code: string;

}

export const TakeWoodToWorkForm: FC<TakeWoodToWorkProps> = ({ name, id, length, diametr, amount, checked, status, code}) => {
  const [takenAmountItems, setTakenAmountItems] = useState('');
  const [isSending, setIsSending] = useState(false);
  // const [length, setLength] = useState('');
  // const [height, setHeight] = useState('');
  // const [checked, setChecked] = useState(false);
  // const [status, setStatus] = useState('на складі');



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (takenAmountItems === '' || takenAmountItems === '0') {
      return;
    }

    try {
      setIsSending(true);

      // Створюємо об'єкт з оновленою кількістю товару
      const updatedItem = {

        name: name,
        length: length,
        diametr: diametr,
        amount: amount - parseInt(takenAmountItems, 10),
        checked: false,
        code: code,
        status: status,
        
      };

      const itemToBoardProcessing = {

        name: name,
        length: length,
        diametr: diametr,
        amount: parseInt(takenAmountItems, 10),
        checked: false,
        code: code,
        status: status,
        
      };


      // Відправляємо PUT-запит на бекенд
  const res = await axios.put(`/wood/${id}`, updatedItem);
  console.log(id);
  console.log('Успішно відправлено на бекенд:', res.data);

  // Очищаємо вміст поля amount після відправки
  setTakenAmountItems('');

  // Тут робимо POST-запит на /inProgressDesk з даними itemToBoardProcessing
  const response = await axios.post('/inProgressWood', itemToBoardProcessing);
  console.log('Успішно відправлено на /inProgressWood:', response.data);

    } catch (error) {
      console.error('Помилка при відправці на бекенд:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ReusableInput action={setTakenAmountItems} count={takenAmountItems} />
      <Button type="submit">Взяти в роботу</Button>
    </Form>
  );
};



