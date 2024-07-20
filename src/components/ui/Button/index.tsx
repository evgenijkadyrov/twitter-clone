import { memo } from 'react';

import { IButtonProps } from './button.interface';
import { StyledButton } from './button.styled';

export const Button = memo<IButtonProps>(
	({ width = '100%', color = 'primary', onClick, type, disabled, children }) => (
		<StyledButton
			$width={width !== undefined ? width : '100%'}
			$color={color !== undefined ? color : 'primary'}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	)
);
