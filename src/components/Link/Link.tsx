import React, { FC } from 'react';

import { LinkBtn } from './Link.styled';

interface ButtonTypes {
  children: React.ReactNode;
  to: string;
}

export const Link: FC<ButtonTypes> = ({ children, to }) => {
  return <LinkBtn to={to}>{children}</LinkBtn>;
};
