import Google from '@assets/icons/google-icon.svg';

import {
	Button,
	ButtonIcon,
	ButtonText,
	WrapperForButtonContent,
} from './buttonRegistration.styled';

interface ButtonRegistrationProps {
	onclickHandler: () => void;
	icon?: string;
	text: string;
}

export const ButtonRegistration = ({ onclickHandler, icon, text }: ButtonRegistrationProps) => (
	<Button type="button" onClick={onclickHandler}>
		<WrapperForButtonContent>
			{icon && <ButtonIcon src={Google} alt="googleIcon" />}
			<ButtonText>{text}</ButtonText>
		</WrapperForButtonContent>
	</Button>
);
