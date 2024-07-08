import { PropsWithRef } from 'react';

export interface SelectProps extends PropsWithRef<JSX.IntrinsicElements['select']> {
	/* eslint-disable-next-line react/require-default-props */
	width?: string | undefined;
	options: string[];
	placeholder: string;
}
