import React, { FC } from 'react';
import { Item, TextWrap, Title } from './RoundWoodItem.styled';

import type { roundWoodItem } from '../../../redux/roundWoodSlice';
import { TakeWoodToWorkForm } from '../../TakeToWorkForm/TakeWoodToWorkForm';

export const RoundWoodItem: FC<roundWoodItem> = ({
  diametr,
  name,
  amount,
  code,
  checked,
  status,
  length,
  _id,
}) => {
  return (
    <>
      <Item>
        <TextWrap>
          <Title>Назва:</Title>
          <p>{name}</p>
        </TextWrap>
        <TextWrap>
          <Title>Діаметр </Title>
          <p>{diametr}</p>
        </TextWrap>
        <TextWrap>
        <Title>Довжина </Title>
          <p>{length}</p>
        </TextWrap>
        <TextWrap>
          <Title>Кількість:</Title>
          <p>{amount}</p>
        </TextWrap>
            <TextWrap>
          <Title>Взяти в роботу:</Title>
          <p>{checked}</p>
        </TextWrap>
                <TextWrap>
          <Title>Статус:</Title>
          <p>{status}</p>
        </TextWrap>
        <TextWrap>
          <Title>Штрихкод:</Title>
          <p>{code}</p>
        </TextWrap>
        <TakeWoodToWorkForm name={name} id={_id} length={length} diametr={diametr} amount={amount} checked={checked} status={status} code={code} />
      </Item>
    </>
  );
};
