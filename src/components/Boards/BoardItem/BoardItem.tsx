import React, { FC } from 'react';
 import { Item, TextWrap, Title } from './BoardItem.styled';

import type { boardItem } from '../../../redux/boardSlice';
import { TakeToWorkForm } from '../../TakeToWorkForm/TakeToWorkForm';

export const BoardItem: FC<boardItem> = ({
  width,
  height,
  length,
  amount,
  type,
  code,

}) => {
  return (
    <>
      <Item>
        <TextWrap>
          <Title>Назва:</Title>
          <p>{type}</p>
        </TextWrap>
        <TextWrap>
          <Title>Довжинна </Title>
          <p>{length}</p>
              </TextWrap>
        <Title>Ширина</Title>
          <p>{height}</p>
          <TextWrap>
        <Title>Товщина</Title>
          <p>{width}</p>
              </TextWrap>
        <TextWrap>

        </TextWrap>
        <TextWrap>
          <Title>Кількість:</Title>
          <p>{amount}</p>
        </TextWrap>
            {/* <TextWrap>
        <Title>Взяти в роботу:</Title>
          <p>{checked}</p>
              </TextWrap>

        <TextWrap>
          <Title>Статус:</Title>
          <p>{status}</p>
        </TextWrap> */}
        <TextWrap>
          <Title>Штрихкод:</Title>
          <p>{code}</p>
        </TextWrap>
        {/* <TextWrap>
          <Title>Овнер=э:</Title>
          <p>{owner}</p>
        </TextWrap> */}
        <TakeToWorkForm name={type} id={code} />
      </Item>
    </>
  );
};
