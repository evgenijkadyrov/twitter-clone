import * as yup from 'yup';

import { updateSchema } from '@/validation/updateUserSchema';

export interface ProfileEditModalProps {
	closeModal: () => void;
}

export type FormData = yup.InferType<typeof updateSchema>;
