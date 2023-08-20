import { FormEvent, useState, FC } from 'react';
import { Button } from '../Button/Button';
import { ReusableInput } from '../Input/Input';

import { Form } from './TakeToWorkForm.styled';

interface TakeToWorkProps {
  name: string;
  id: string;
}

export const TakeToWorkForm: FC<TakeToWorkProps> = ({ name, id }) => {
  const [inWork, setInWork] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inWork === '' || inWork === '0') {
      return;
    }
    console.log(inWork);
    console.log(name);
    console.log(id);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ReusableInput action={setInWork} count={inWork} />
      <Button type="submit">Взяти в роботу</Button>
    </Form>
  );
};
