import React, { FormEvent, useState, FC } from 'react';

interface TakeToWorkProps {
  name: string;
}

export const TakeToWorkForm: FC<TakeToWorkProps> = ({ name }) => {
  const [inWork, setInWork] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^([0-9]+|0)$/.test(inputValue)) {
      setInWork(inputValue);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inWork === '') {
      return;
    }
    console.log(inWork);
    console.log(name);
  };

  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <input type="text" value={inWork} onChange={handleChange} />
      <button>Взяти в роботу</button>
    </form>
  );
};
