import React, { FC } from 'react';

import { Btn } from './Button.styled';

interface ButtonTypes {
  children: React.ReactNode;
  type: 'button' | 'reset' | 'submit' | undefined;
  tablet?: string;
  center?: boolean;
}

export const Button: FC<ButtonTypes> = ({ children, type, tablet, center }) => {
  return (
    <Btn type={type} $tablet={tablet} $center={center}>
      {children}
    </Btn>
  );
};
