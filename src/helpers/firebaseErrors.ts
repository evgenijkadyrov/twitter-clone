import { FirebaseError } from '@firebase/util';

export const handleFirebaseError = (
	error: unknown,
	errorCode: string,
	errorMessage: string
): { error: string } => {
	if (error instanceof FirebaseError && error.code === errorCode) {
		return { error: errorMessage };
	}
	if (error instanceof FirebaseError) {
		return { error: error.message };
	}

	return { error: 'Unknown error' };
};
