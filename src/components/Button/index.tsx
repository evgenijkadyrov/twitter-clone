import { memo, ReactNode } from 'react';

import { StyledButton } from './button.styled';

export interface IButtonProps {
	width: string;
	color: string;
	onClick?: () => void;
	children: ReactNode;
	type: 'submit' | 'button';
}

export const Button = memo<IButtonProps>(
	({ width = '100%', color = 'primary', onClick, type, children }) => (
		<StyledButton $width={width} $color={color} onClick={onClick} type={type}>
			{children}
		</StyledButton>
	)
);
