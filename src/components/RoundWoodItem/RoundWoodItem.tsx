import React, { FC } from 'react';
import { Item, TextWrap, Title } from './RoundWoodItem.styled';

import type { roundWoodItem } from '../../redux/roundWoodSlice';
import { TakeToWorkForm } from '../TakeToWorkForm/TakeToWorkForm';

export const RoundWoodItem: FC<roundWoodItem> = ({
  name,
  diametr,
  code,
  amount,
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
          <Title>Кількість:</Title>
          <p>{amount}</p>
        </TextWrap>
        <TextWrap>
          <Title>Штрихкод:</Title>
          <p>{code}</p>
        </TextWrap>
        <TakeToWorkForm name={name} />
      </Item>
    </>
  );
};
