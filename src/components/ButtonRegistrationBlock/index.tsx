import { useNavigate } from 'react-router-dom';
import Google from '@assets/icons/google-icon.svg';
import { ButtonRegistration } from '@components/ui/ButtonRegistration';

import { Paths } from '@/constants/routerPaths';
import { signUpWithGoogle } from '@/services/serviceAuth';

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
			<ButtonRegistration
				text="Sign up with Google"
				icon={Google}
				onclickHandler={handleGoogleClick}
			/>
			<ButtonRegistration text="Sign up with email" onclickHandler={handleEmailClick} />
		</>
	);
};
