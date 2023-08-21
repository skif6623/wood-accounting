import { useState, FormEvent } from 'react';
import { Container } from '../../components/Container/Container';
import { ReusableInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Table } from '../../components/Table/Table';

import type { roundWoodItem } from '../../redux/roundWoodSlice';
import { nanoid } from 'nanoid';

import {
  AddingForm,
  AddingFormLabel,
  AddingFormInput,
} from './AddItems.styled';

export const AddItemsForm = () => {
  const [diametr, setDiametr] = useState('');
  const [amount, setAmount] = useState('');
  const [addedItems, setAddedItems] = useState<roundWoodItem[]>([]);

  const isItems = addedItems.length !== 0 ? 'show' : 'hide';
  console.log(isItems);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.sort.value;
    const code = form.code.value;

    if (name === '' || code === '' || diametr === '' || amount === '') {
      console.log('Заповніть всі поля');
      return;
    }

    const newItem: roundWoodItem = {
      diametr: +diametr,
      amount: +amount,
      code,
      name,
      id: nanoid(),
    };

    setAddedItems(prev => [...prev, newItem]);
    form.reset();
    clearData();
  };

  const clearData = () => {
    setDiametr('');
    setAmount('');
  };

  return (
    <>
      <Container>
        <AddingForm $empty={isItems} onSubmit={handleSubmit}>
          <AddingFormLabel>
            Діаметр
            <ReusableInput action={setDiametr} count={diametr} />
          </AddingFormLabel>

          <AddingFormLabel>
            Кількість
            <ReusableInput action={setAmount} count={amount} />
          </AddingFormLabel>

          <AddingFormLabel>
            Порода
            <AddingFormInput type="text" name="sort" />
          </AddingFormLabel>

          <AddingFormLabel>
            Штрихкод
            <AddingFormInput type="number" name="code" />
          </AddingFormLabel>

          <Button type="submit">Прийняти</Button>
        </AddingForm>
      </Container>
      {isItems === 'show' && <Table items={addedItems} />}
    </>
  );
};
