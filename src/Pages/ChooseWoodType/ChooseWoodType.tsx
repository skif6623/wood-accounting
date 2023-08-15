import React from 'react';
import { WoodCard } from '../../components/WoodCard/WoodCard';

import { CardWrapper } from './ChooseWoodType.styled';

export const ChooseWoodType = () => {
  return (
    <CardWrapper>
      <WoodCard icon="#icon-tree">Кругляк</WoodCard>
      <WoodCard icon="#icon-board">Дошка</WoodCard>
    </CardWrapper>
  );
};
