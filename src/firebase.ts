import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBgo13ZG0wBCOYOW235G91NEKwgZ2hSwXo',
	authDomain: 'twitter-clone-yauhen.firebaseapp.com',
	projectId: 'twitter-clone-yauhen',
	storageBucket: 'twitter-clone-yauhen.appspot.com',
	messagingSenderId: '1048832850615',
	appId: '1:1048832850615:web:a30016fe03361a6a0feb32',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log(db);
export const storage = getStorage(app);
