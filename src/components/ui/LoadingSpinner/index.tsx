import { FC } from 'react';

import { Container, Ring, Span } from './loadingSpinner.styled';

export const LoadingSpinner: FC = () => (
	<Container>
		<Ring>
			<Span />
		</Ring>
	</Container>
);
