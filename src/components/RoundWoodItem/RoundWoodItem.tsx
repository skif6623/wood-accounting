import React, { FC } from 'react';
import { Item, Text } from './RoundWoodItem.styled';

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
        <Text>{name}</Text>
        <Text>{diametr}</Text>
        <Text>{amount}</Text>
        <Text>{code}</Text>
        <TakeToWorkForm name={name} />
      </Item>
    </>
  );
};
