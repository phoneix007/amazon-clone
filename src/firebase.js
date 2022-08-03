// tools , need to install
// firebase , firebase-tool using npm
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDad35kCEVpOlOBLxxVe2DiFiNZceT5jOY',
	authDomain: 'clone-502d0.firebaseapp.com',
	projectId: 'clone-502d0',
	storageBucket: 'clone-502d0.appspot.com',
	messagingSenderId: '793411185858',
	appId: '1:793411185858:web:a86064db5d1d2c2815df5b',
};

// Initialize the app
const firebaseApp = initializeApp(firebaseConfig);

//  Initialize the database
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
