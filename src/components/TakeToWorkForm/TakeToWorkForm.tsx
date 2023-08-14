import React, { FormEvent, ChangeEvent, useState, FC } from 'react';
import { Button } from '../Button/Button';

import {
  Input,
  Form,
  InputWrapper,
  PlusIcon,
  MinusIcon,
} from './TakeToWorkForm.styled';

interface TakeToWorkProps {
  name: string;
  id: string;
}

export const TakeToWorkForm: FC<TakeToWorkProps> = ({ name, id }) => {
  const [inWork, setInWork] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^([0-9]+|0)$/.test(inputValue)) {
      setInWork(inputValue);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inWork === '' || inWork === '0') {
      return;
    }
    console.log(inWork);
    console.log(name);
    console.log(id);
  };

  const increment = () => {
    let currentNumber = Number(inWork);
    currentNumber += 1;
    setInWork(currentNumber.toString());
  };

  const decrement = () => {
    let currentNumber = Number(inWork);
    currentNumber -= 1;
    if (currentNumber === -1) {
      return;
    }
    setInWork(currentNumber.toString());
  };

  return (
    <Form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <InputWrapper>
        <MinusIcon onClick={() => decrement()} />
        <Input type="text" value={inWork} onChange={handleChange} />
        <PlusIcon onClick={() => increment()} />
      </InputWrapper>

      <Button type="submit">Взяти в роботу</Button>
    </Form>
  );
};
