import styled from 'styled-components';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 80px;
  height: 40px;

  &:focus {
    outline: none;
    border: 2px solid #3ecba7;
  }
`;

export const MinusIcon = styled(AiOutlineMinusCircle)`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  color: #3ecba7;

  transform: scale(1);
  transition: transform 250ms ease, fill 250ms ease;

  &:hover,
  &:focus {
    fill: #157f64;
    cursor: pointer;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const PlusIcon = styled(AiOutlinePlusCircle)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 15px;

  color: #3ecba7;

  transform: scale(1);
  transition: transform 250ms ease, fill 250ms ease;

  &:hover,
  &:focus {
    fill: #157f64;
    cursor: pointer;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
