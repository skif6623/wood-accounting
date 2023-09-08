import React, { FC } from 'react';
 import { Item, TextWrap, Title } from './ProductItemStyled';

import type { productionItem } from '../../../redux/productionSlice';
import { TakeToWorkForm } from '../../TakeToWorkForm/TakeToWorkForm';

export const ProdactionItem: FC<productionItem> = ({
//   width,
//   height,
//   length,
  amount,
  name,
  code,
//   checked,
//   status,

}) => {
  return (
    <>
      <Item>
        <TextWrap>
          <Title>Назва:</Title>
          <p>{name}</p>
        </TextWrap>
        <TextWrap>
          {/* <Title>Довжинна </Title>
          <p>{length}</p>
              </TextWrap>
        <Title>Ширина</Title>
          <p>{height}</p>
          <TextWrap>
        <Title>Товщина</Title>
          <p>{width}</p>
              </TextWrap>
        <TextWrap> */}

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
        <TakeToWorkForm name={name} id={code} />
      </Item>
    </>
  );
};
