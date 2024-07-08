import { forwardRef } from 'react';

import { SelectProps } from './select.interfaces';
import { StyledOption, StyledSelect } from './select.styled';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ width, placeholder, name, options, onChange, onBlur }, ref) => (
		<StyledSelect
			$width={width}
			name={name}
			ref={ref}
			onChange={onChange}
			onBlur={onBlur}
			defaultValue=""
		>
			<StyledOption value="" disabled>
				{placeholder}
			</StyledOption>
			{options.map((item) => (
				<StyledOption key={item} value={item}>
					{item}
				</StyledOption>
			))}
		</StyledSelect>
	)
);
