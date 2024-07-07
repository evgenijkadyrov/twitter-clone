import React, { forwardRef, PropsWithRef } from 'react';
import { ErrorMessage, StyledInput } from '@components/Input/input.styled';

export interface InputProps extends PropsWithRef<JSX.IntrinsicElements['input']> {
	width: string;
	errorMessage: string | undefined;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			width,
			placeholder,
			name,
			onChange,
			onBlur,
			type = 'text',
			defaultValue,
			autoComplete,
			errorMessage,
		},
		ref
	) => (
		<div>
			<StyledInput
				type={type}
				$width={width}
				placeholder={placeholder}
				name={name}
				ref={ref}
				onChange={onChange}
				onBlur={onBlur}
				defaultValue={defaultValue}
				autoComplete={autoComplete}
			/>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	)
);
