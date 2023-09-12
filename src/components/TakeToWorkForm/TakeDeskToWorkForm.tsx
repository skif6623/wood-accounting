import { FormEvent, useState, FC } from 'react';
import { Button } from '../Button/Button';
import { ReusableInput } from '../Input/Input';
import { Form } from './TakeToWorkForm.styled';
import axios from 'axios';


interface TakeDeskToWorkProps {
  name: string;
  id: string;
  length: number;
  width: number;
  height: number;
  amount: number;
  checked: boolean;
  status: string;
  code: string;

}

export const TakeDeskToWorkForm: FC<TakeDeskToWorkProps> = ({ name, id, length, width, height, amount, checked, status, code}) => {
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
        width: width,
        height: height,
        amount: amount - parseInt(takenAmountItems, 10),
        checked: false,
        code: code,
        status: status,
        
      };

      const itemToBoardProcessing = {

        name: name,
        length: length,
        width: width,
        height: height,
        amount: parseInt(takenAmountItems, 10),
        checked: false,
        code: code,
        status: status,
        
      };


      // Відправляємо PUT-запит на бекенд
  const res = await axios.put(`/desks/${id}`, updatedItem);
  console.log(id);
  console.log('Успішно відправлено на бекенд:', res.data);

  // Очищаємо вміст поля amount після відправки
  setTakenAmountItems('');

  // Тут робимо POST-запит на /inProgressDesk з даними itemToBoardProcessing
  const response = await axios.post('/inProgressDesk', itemToBoardProcessing);
  console.log('Успішно відправлено на /inProgressDesk:', response.data);

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

