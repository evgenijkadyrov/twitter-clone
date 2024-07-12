import { useNavigate } from 'react-router-dom';
import Google from '@assets/icons/google-icon.svg';

import { Paths } from '@/constants/routerPaths';
import { signUpWithGoogle } from '@/services/serviceAuth';

import { Button, ButtonIcon, ButtonText, WrapperForButtonContent } from './buttonBlock.styled';

export const ButtonRegistrationBlock = () => {
	const navigate = useNavigate();
	const handleGoogleClick = async (): Promise<void> => {
		try {
			await signUpWithGoogle();
		} catch (error) {
			console.log(error);
		}
	};
	const handleEmailClick = () => {
		navigate(Paths.REGISTRATION);
	};
	return (
		<>
			<Button type="button" onClick={handleGoogleClick}>
				<WrapperForButtonContent>
					<ButtonIcon src={Google} alt="googleIcon" />
					<ButtonText>Sign up with Google</ButtonText>
				</WrapperForButtonContent>
			</Button>
			<Button type="button" onClick={handleEmailClick}>
				<WrapperForButtonContent>
					<ButtonText>Sign up with email</ButtonText>
				</WrapperForButtonContent>
			</Button>
		</>
	);
};
