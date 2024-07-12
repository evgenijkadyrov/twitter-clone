import { memo, ReactNode } from 'react';

import { StyledButton } from './button.styled';

export interface IButtonProps {
	width: string;
	color: string;
	children: ReactNode;
}

export const Button = memo<IButtonProps>(({ width = '100%', color = 'primary', children }) => (
	<StyledButton $width={width} $color={color}>
		{children}
	</StyledButton>
));
