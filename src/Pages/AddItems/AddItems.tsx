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
  AddingFormText,
} from './AddItems.styled';


export const AddItemsForm = () => {
  const [diametr, setDiametr] = useState('');
  const [amount, setAmount] = useState('');
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState('');
  const [owner, setOwner] = useState('');
  const [addedItems, setAddedItems] = useState<roundWoodItem[]>([]);

  const isItems = addedItems.length !== 0 ? 'show' : 'hide';

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
      checked,
      status,
      owner,
   
    };

    setAddedItems(prev => [...prev, newItem]);
    form.reset();
    clearData();
  };

  const clearData = () => {
    setDiametr('');
    setAmount('');
    setChecked(false);
    setStatus('');
    setOwner('');    
  };
  
  console.log(addedItems);
  
  return (
    <>
      <Container>
        <AddingForm $empty={isItems} onSubmit={handleSubmit}>
          <AddingFormLabel>
            <AddingFormText>Діаметр</AddingFormText>
            <ReusableInput action={setDiametr} count={diametr} />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Кількість</AddingFormText>
            <ReusableInput action={setAmount} count={amount} />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Порода</AddingFormText>
            <AddingFormInput type="text" name="sort" />
          </AddingFormLabel>

          <AddingFormLabel>
            <AddingFormText>Штрихкод</AddingFormText>
            <AddingFormInput type="number" name="code" />
          </AddingFormLabel>

          <Button center tablet="300px" type="submit">
            Прийняти
          </Button>
        </AddingForm>
      </Container>
      {isItems === 'show' && <Table items={addedItems} />}
    </>
  );
};
