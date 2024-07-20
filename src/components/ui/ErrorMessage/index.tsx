import { ErrorStyled } from './errorMessage.styled';

export interface ErrorMessageProps {
	message: string;
}
export const ErrorMessage = ({ message }: ErrorMessageProps) => (
	<ErrorStyled>{message}</ErrorStyled>
);
