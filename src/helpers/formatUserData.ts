import AvatarIcon from '@assets/images/avatar.png';
import firebase from 'firebase/compat/app';
import DocumentData = firebase.firestore.DocumentData;

export const formatUserData = (
	userData: { data: DocumentData } | undefined,
	uid: string,
	token: string
) => {
	const {
		name,
		phoneNumber,
		email,
		birthDate,
		description,
		nickname,

		avatarImage,
	} = userData?.data || {};

	return {
		name: (name as string) || null,
		phoneNumber: (phoneNumber as string) || null,
		email: (email as string) || null,
		id: uid,
		token: token || null,
		birthDate: (birthDate as string) || null,
		description: (description as string) || null,
		nickname: (nickname as string) || null,
		avatarImage: (avatarImage as string) || AvatarIcon,
	};
};
