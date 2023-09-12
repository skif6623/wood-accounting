import { useState, FormEvent } from 'react';
import { Container } from '../../components/Container/Container';
import { ReusableInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { TableWood } from '../../components/Table/TableWood';
import type { roundWoodItem } from '../../redux/roundWoodSlice';

import {
  AddingForm,
  AddingFormLabel,
  AddingFormInput,
  AddingFormText,
} from './AddItems.styled';
import axios from 'axios';

export type woodWithoutId = Omit<roundWoodItem, "_id">

export const AddWoodItemsForm = () => {
  const [diametr, setDiametr] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [length, setLength] = useState('');
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState('на складі');
  const [addedItems, setAddedItems] = useState<woodWithoutId[]>([]);
  const [isSending, setIsSending] = useState(false);

  const isItems = addedItems.length !== 0 ? 'show' : 'hide';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === '' || code === '' || diametr === '' || amount === '' || length === '') {
      console.log('Заповніть всі поля');
      return;
    }

    const newItem: woodWithoutId = {
      diametr: +diametr,
      amount: +amount,
      length: +length,
      code,
      name,
      checked,
      status,
    };

    setAddedItems(prev => [...prev, newItem]);
    clearData();
  };


  const handleSendToBackend = async () => {
    try {
      setIsSending(true);
      for (const item of addedItems) {
        const res = await axios.post('/wood', item);
        console.log('Успешно отправлено на бэкенд:', res.data);
      }
      setAddedItems([]);
      clearData();
    } catch (error) {
      console.error('Ошибка при отправке на бэкенд:', error);
    } finally {
      setIsSending(false);
    }
  };

  const clearData = () => {
    setDiametr('');
    setLength('');
    setAmount('');
    setName('');
    setCode('');
    setChecked(false);

  };

  return (
    <>
      <Container>
        <AddingForm $empty={isItems} onSubmit={handleSubmit}>
          <AddingFormLabel>
            <AddingFormText>Діаметр</AddingFormText>
            <ReusableInput action={setDiametr} count={diametr} />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Довжина</AddingFormText>
            <ReusableInput action={setLength} count={length} />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Кількість</AddingFormText>
            <ReusableInput action={setAmount} count={amount} />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Порода</AddingFormText>
            <AddingFormInput type="text" name="sort" onChange={(e) => setName(e.target.value)} value={name} />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Штрихкод</AddingFormText>
            <AddingFormInput type="number" name="code" onChange={(e) => setCode(e.target.value)} value={code} />
          </AddingFormLabel>

          <Button center tablet="300px" type="submit">
            Прийняти
          </Button>
        </AddingForm>
      </Container>
      {isItems === 'show' && (
        <>
          <TableWood items={addedItems} />
          <button onClick={handleSendToBackend} disabled={isSending}>
            Відправити на склад
          </button>
        </>
      )}
    </>
  );
};