import * as Keychain from 'react-native-keychain';
import { ref, set } from 'firebase/database';
import { db } from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';


export const login = (email, password) => {
 	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
	.then(() => {
		Toast.show({
			type: 'success',
			text1: 'User logged in!',
			onPress: () => Toast.hide()
		})
		//saveCredentials(token, email, password)
		router.replace('/home')
	})
	.catch((error) => {
		Toast.show({
			type: 'error',
			text1: 'Error logging in',
			text2: error.message.replace('Firebase: Error (auth/', '').replace(').', '')
		})
	})
}

export const register = (email, password) => {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		Toast.show({
			type: 'success',
			text1: 'User registered!',
			onPress: () => Toast.hide()
		})
		//here, first create a user in the database
		set(ref(db, 'users/' + userCredential.user.uid + '/'), {
			uid: userCredential.user.uid,
			username: userCredential.user.displayName,
			photo_url: userCredential.user.photoURL,
			email: userCredential.user.email,
			password: password
		})
		.then(() => {
			Toast.show({
				type: 'success',
				text1: 'Welcome aboard!',
				onPress: () => Toast.hide()
			})
			router.replace('/home')
		})
		.catch((error) => {
			Toast.show({
				type: 'error',
				text1: 'Error registering user in database',
				text2: error.message
			})
		})
	})
	.catch((error) => {
		Toast.show({
			type: 'error',
			text1: 'Error registering user',
			text2: error.message.replace('Firebase: Error (auth/', '').replace(').', '')
		})
	})
}