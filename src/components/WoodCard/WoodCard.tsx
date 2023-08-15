import React, { FC } from 'react';

import sprite from '../../images/sprite.svg';

import { Card, Icon, Text } from './WoodCard.styled';

interface WoodCardProps {
  icon: string;
  children: React.ReactNode;
}

export const WoodCard: FC<WoodCardProps> = ({ icon, children }) => {
  return (
    <Card>
      <Icon width="150" height="150">
        <use href={sprite + icon}></use>
      </Icon>
      <Text>{children}</Text>
    </Card>
  );
};
