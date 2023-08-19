import React, { FC } from 'react';

import { ContainerWrap } from './Container.styled';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};
