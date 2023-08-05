import React, { FC } from 'react';

import { Btn } from './Button.styled';

interface ButtonTypes {
  children: React.ReactNode;
  type: 'button' | 'reset' | 'submit' | undefined;
}

export const Button: FC<ButtonTypes> = ({ children, type }) => {
  return <Btn type={type}>{children}</Btn>;
};
