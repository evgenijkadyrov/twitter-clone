import * as yup from 'yup';

import { UpdateSchema } from '@/validation/signUpValidation';

export interface ProfileEditModalProps {
	closeModal: () => void;
}

export interface UpdateFormData {
	phoneNumber: string;
	name: string;
	email: string;
	nickname?: string | undefined;
	description?: string | undefined;
}

export type FormData = yup.InferType<typeof UpdateSchema>;
