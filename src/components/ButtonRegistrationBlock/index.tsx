import { useNavigate } from 'react-router-dom';
import Google from '@assets/icons/google-icon.svg';
import { ButtonRegistration } from '@components/ui/ButtonRegistration';

import { Paths } from '@/constants/routerPaths';
import { SIGN_UP_EMAIL, SIGN_UP_GOOGLE } from '@/constants/textConstant';
import { getErrorMessage } from '@/helpers/getErrorMessage';
import { signUpWithGoogle } from '@/services/serviceAuth';
import { useAppDispatch } from '@/store';
import { notificationActions } from '@/store/notificationSlice';
import { userActions } from '@/store/userSlice';

export const ButtonRegistrationBlock = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const handleGoogleClick = async (): Promise<void> => {
		try {
			const data = await signUpWithGoogle();
			dispatch(userActions.fetchUser(data));
		} catch (error) {
			dispatch(notificationActions.showError({ error: getErrorMessage(error) }));
		}
	};
	const handleEmailClick = () => {
		navigate(Paths.REGISTRATION);
	};
	return (
		<>
			<ButtonRegistration
				data-testid="registration-block"
				text={SIGN_UP_GOOGLE}
				icon={Google}
				onclickHandler={handleGoogleClick}
			/>
			<ButtonRegistration
				testId="registration-by-email"
				text={SIGN_UP_EMAIL}
				onclickHandler={handleEmailClick}
			/>
		</>
	);
};
