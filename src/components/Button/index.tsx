import { memo, ReactNode } from 'react';

import { StyledButton } from './button.styled';

export interface IButtonProps {
	width: string;
	color: string;
	onClick?: () => void;
	children: ReactNode;
}

export const Button = memo<IButtonProps>(
	({ width = '100%', color = 'primary', onClick, children }) => (
		<StyledButton $width={width} $color={color} onClick={onClick}>
			{children}
		</StyledButton>
	)
);
