import { ReactNode } from 'react';

export enum TypeButton {
	submit = 'submit',
	button = 'button',
}
export interface IButtonProps {
	width: string;
	color: string;
	onClick?: () => void;
	children: ReactNode;
	type: TypeButton;
}
