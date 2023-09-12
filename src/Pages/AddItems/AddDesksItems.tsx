import { useState, FormEvent } from 'react';
import { Container } from '../../components/Container/Container';
import { ReusableInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { TableDesk } from '../../components/Table/TableDesk';
import type { boardItem } from '../../redux/boardSlice';

import {
  AddingForm,
  AddingFormLabel,
  AddingFormInput,
  AddingFormText,
} from './AddItems.styled';
import axios from 'axios';

export type random = Omit<boardItem, "_id">

export const AddDeskItemsForm = () => {
  const [width, setWidth] = useState('0');
  const [height, setHeight] = useState('0');
    const [amount, setAmount] = useState('0');
    const [length, setLength] = useState('0');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState('на складі');
  const [addedItems, setAddedItems] = useState<random[]>([]);
  const [isSending, setIsSending] = useState(false);

  const isItems = addedItems.length !== 0 ? 'show' : 'hide';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === '' || code === '' || width === '' || amount === '' || height === '' || length ==='') {
      console.log('Заповніть всі поля');
      return;
    }

      const newItem: random = {
        width: parseFloat(width),
        height: parseFloat(height),
        length: parseFloat(length),
        amount: +amount,
        code,
        name,
        checked,
        status,
        // _id: ''
      };

    // delete newItem._id;
    
    setAddedItems(prev => [...prev, newItem]);
    clearData();
  };


  const handleSendToBackend = async () => {
    try {
      setIsSending(true);
      for (const item of addedItems) {
        const res = await axios.post('/desks', item);
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
        setHeight('');
        setAmount('');
        setName('');
        setCode('');
        setWidth('');
        setLength('');
        setChecked(false);

    };

  return (
    <>
      <Container>
        <AddingForm $empty={isItems} onSubmit={handleSubmit}>
          <AddingFormLabel>
            <AddingFormText>Ширина</AddingFormText>
            <ReusableInput action={setWidth} count={width} />
          </AddingFormLabel>

                    <AddingFormLabel>
            <AddingFormText>Довжина</AddingFormText>
            <ReusableInput action={setLength} count={length} />
          </AddingFormLabel>

                    <AddingFormLabel>
            <AddingFormText>Висота</AddingFormText>
            <ReusableInput action={setHeight} count={height} />
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
          <TableDesk items={addedItems} />
          <button onClick={handleSendToBackend} disabled={isSending}>
            Відправити на склад
          </button>
        </>
      )}
    </>
  );
};



