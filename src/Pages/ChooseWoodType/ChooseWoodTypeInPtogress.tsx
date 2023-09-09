import React from 'react';
import { WoodCard } from '../../components/WoodCard/WoodCard';

import { CardWrapper } from './ChooseWoodType.styled';

export const ChooseWoodTypeInPtogress = () => {
  return (

          <CardWrapper>
              <h2>Що Беремо в роботу?</h2>
        <WoodCard to="/round-wood-progress" icon="#icon-tree">
          Кругляк
        </WoodCard>
        <WoodCard to="/board-wood-progress" icon="#icon-board">
          Дошка
        </WoodCard>
      </CardWrapper>

  );
};