import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateEmail,
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	setDoc,
	updateDoc,
	where,
} from 'firebase/firestore';
import * as yup from 'yup';

import { db } from '@/firebase';
import { LoginFormFields } from '@/services/interfaces';
import { User } from '@/store/userSlice';
import { validatePhone } from '@/validation/signUpValidation';

export const validateEmail = (email: string | undefined): boolean =>
	yup.string().email().isValidSync(email);

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
		nickname: null,
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
		nickname: null,
		description: null,
	});
	return { uid, token };
};
export const login = async (inputData: LoginFormFields) => {
	const auth = getAuth();
	const { phoneOrEmail, password } = inputData;
	let emailFromDb = '';

	const phoneNumber = validatePhone(phoneOrEmail) ? phoneOrEmail : null;

	if (phoneNumber) {
		const q = query(collection(db, 'users'), where('phoneNumber', '==', phoneNumber), limit(3));
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			emailFromDb = doc.data().email as string;
		});
	}

	const email = validateEmail(phoneOrEmail) ? phoneOrEmail : emailFromDb;
	const { user } = await signInWithEmailAndPassword(auth, email, password);

	const { uid } = user;
	const token = await user.getIdToken();

	const usersCollectionRef = collection(db, 'users');
	const response = await getDocs(usersCollectionRef);

	const data = response.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
	const userData = data.find((item) => item.data.id === uid);

	return { userData, token, uid };
};
export const signOut = async (): Promise<void> => {
	const auth = getAuth();
	await auth.signOut();
};

export const updateUserInfo = async (
	phoneNumber: string | null,
	name: string | null,
	email: string | null,
	nickname: string | null | undefined,
	description: string | null | undefined,
	id: string | null | undefined
): Promise<void> => {
	const auth = getAuth();
	const user = auth.currentUser;
	if (!user || !id) {
		throw new Error('not login');
	}

	const userRef = doc(db, 'users', id);

	if (user.email !== email) {
		await updateEmail(auth.currentUser, email as string);
	}

	await updateDoc(userRef, {
		name,
		email,
		phoneNumber,
		description,
		nickname,
	});
};
