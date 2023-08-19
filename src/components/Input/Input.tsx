import { ChangeEvent, FC, Dispatch, SetStateAction } from 'react';
import { InputWrapper, MinusIcon, PlusIcon, Input } from './Input.styled';

interface InputProps {
  action: Dispatch<SetStateAction<string>>;
  count: string;
}
export const ReusableInput: FC<InputProps> = ({ action, count }) => {
  const increment = () => {
    let currentNumber = Number(count);
    currentNumber += 1;
    action(currentNumber.toString());
  };

  const decrement = () => {
    let currentNumber = Number(count);
    currentNumber -= 1;
    if (currentNumber === -1) {
      return;
    }
    action(currentNumber.toString());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^([0-9]+|0)$/.test(inputValue)) {
      action(inputValue);
    }
  };
  return (
    <InputWrapper>
      <MinusIcon onClick={() => decrement()} />
      <Input type="text" value={count} onChange={handleChange} />
      <PlusIcon onClick={() => increment()} />
    </InputWrapper>
  );
};
