import React from 'react';
import { WoodCard } from '../../components/WoodCard/WoodCard';

import { CardWrapper } from './ChooseWoodType.styled';

export const ChooseWoodType = () => {
  return (
    <CardWrapper>
      <WoodCard to="/round-wood" icon="#icon-tree">
        Кругляк
      </WoodCard>
      <WoodCard to="/board-wood" icon="#icon-board">
        Дошка
      </WoodCard>
    </CardWrapper>
  );
};
