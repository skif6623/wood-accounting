import React, { FC } from 'react';

import sprite from '../../images/sprite.svg';

import { Card, Icon, Text } from './WoodCard.styled';

interface WoodCardProps {
  icon: string;
  children: React.ReactNode;
  to: string;
}

export const WoodCard: FC<WoodCardProps> = ({ icon, children, to }) => {
  return (
    <Card to={to}>
      <Icon>
        <use href={sprite + icon}></use>
      </Icon>
      <Text>{children}</Text>
    </Card>
  );
};
