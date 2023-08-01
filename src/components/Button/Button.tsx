import React, {FC} from "react";

import {StyledButton} from "./Button.styled";

interface ButtonTypes {
	children: React.ReactNode;
	to: string;
}

export const Button: FC<ButtonTypes> = ({children, to}) => {
	return <StyledButton to={to}>{children}</StyledButton>;
};
