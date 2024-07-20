import * as yup from 'yup';

import { UpdateSchema } from '@/validation/signUpValidation';

export interface ProfileEditModalProps {
	closeModal: () => void;
}

export interface UpdateFormData {
	phoneNumber: string;
	name: string;
	email: string;
	nickname: string;
	description: string;
}

export type FormData = yup.InferType<typeof UpdateSchema>;
