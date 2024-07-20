import { memo } from 'react';

import { IButtonProps } from './button.interface';
import { StyledButton } from './button.styled';

export const Button = memo<IButtonProps>(
	({ width = '100%', color = 'primary', onClick, type, children }) => (
		<StyledButton $width={width} $color={color} onClick={onClick} type={type}>
			{children}
		</StyledButton>
	)
);
