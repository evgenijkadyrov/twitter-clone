import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '@/firebase';

export interface User {
	id: string | null;
	name: string | null;
	email: string | null;
	phoneNumber: string | null;
	token: string | null;
	birthDate: string | null;
	description: string | null;
}

export const signUpWithGoogle = async (): Promise<User> => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);
	const credentials = GoogleAuthProvider.credentialFromResult(result);
	const token = credentials?.accessToken;
	const { user } = result;
	const { displayName, phoneNumber, email, uid } = user;

	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);

	const returnData: User = {
		id: null,
		name: null,
		email: null,
		token: null,
		phoneNumber: null,
		birthDate: null,
		description: null,
	};

	if (docSnap.exists()) {
		const data = docSnap.data() as User;
		return { ...data, token: token || null } as User;
	}

	await setDoc(docRef, {
		name: displayName,
		phoneNumber,
		email,
		id: uid,
	});

	return {
		...returnData,
		id: uid,
		name: displayName,
		phoneNumber,
		email,
		token: token || null,
	} as User;
};

const auth = getAuth();
export const singUp = async (
	name: string,
	email: string,
	phoneNumber: string,
	password: string,
	birthDate: string
) => {
	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	const { uid } = user;
	const token = await user.getIdToken();
	await setDoc(doc(db, 'users', uid), {
		name,
		email,
		phoneNumber,
		birthDate,
		id: uid,
	});
	return { uid, token };
};
