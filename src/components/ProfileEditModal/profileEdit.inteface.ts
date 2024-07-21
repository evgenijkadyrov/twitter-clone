import * as yup from 'yup';

import { UpdateSchema } from '@/validation/signUpValidation';

export interface ProfileEditModalProps {
	closeModal: () => void;
}

export type FormData = yup.InferType<typeof UpdateSchema>;
