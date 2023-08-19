import { useState, FormEvent } from 'react';
import { Container } from '../../components/Container/Container';
import { ReusableInput } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import type { roundWoodItem } from '../../redux/roundWoodSlice';
import { nanoid } from 'nanoid';

import {
  AddingForm,
  AddingFormLabel,
  AddingFormInput,
} from './AddItemsForm.styled';

export const AddItemsForm = () => {
  const [diametr, setDiametr] = useState('');
  const [amount, setAmount] = useState('');
  const [addedItems, setAddedItems] = useState<roundWoodItem[]>([]);
  console.log(addedItems);

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
      code: +code,
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
    <Container>
      <AddingForm onSubmit={handleSubmit}>
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
          <AddingFormInput type="text" name="code" />
        </AddingFormLabel>

        <Button type="submit">Прийняти</Button>
      </AddingForm>
      {addedItems.length === 0 ? (
        <h2>Ви ще нічого не додавали</h2>
      ) : (
        <h2>Список прийнятого</h2>
      )}
    </Container>
  );
};

// import React, { FC, FormEvent, useState } from 'react';
// import { Button } from '../../components/Button/Button';
// import { Container } from '../../components/Container/Container';
// import { Form, Input, Description } from './AddItemsForm.styled';
// import type { roundWoodItem } from '../../redux/roundWoodSlice';
// interface AddFormProps {
//   type: 'round' | 'board';
// }

// export const AddItemsForm: FC<AddFormProps> = ({ type }) => {
//   const [AddedItems, setAddedItems] = useState<roundWoodItem[]>([]);
//   console.log(AddedItems);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const diametr = form.diametr.value;
//     const name = form.sort.value;
//     const amount = form.amount.value;
//     const code = form.code.value;

//     const newItem: roundWoodItem = {
//       id: (AddedItems.length + 1).toString(),
//       diametr: Number(diametr),
//       name,
//       amount: Number(amount),
//       code,
//     };

//     setAddedItems(prev => [...prev, newItem]);

//     form.reset();
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <label>
//           <Description>Діаметр</Description>
//           <Input type="number" name="diametr" />
//         </label>
//         <label>
//           <Description>Порода</Description>
//           <Input type="text" name="sort" />
//         </label>
//         <label>
//           <Description>Кількість</Description>
//           <Input type="number" name="amount" />
//         </label>
//         <label>
//           <Description>Штрихкод</Description>
//           <Input type="text" name="code" />
//         </label>
//         <Button twidth="100%" type="submit">
//           Додати
//         </Button>
//       </Form>
//     </Container>
//   );
// };
