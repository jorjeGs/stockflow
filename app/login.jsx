import React, {useState} from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {app, db} from '../firebaseConfig'
import { ref, set } from 'firebase/database'
import Toast from 'react-native-toast-message'


const Login = () => {
	const [userForm, setuserForm] = useState({
		email: '',
		password: ''
	})

	const [isLoading, setIsLoading] = useState(false)

	const handleChangeText = (value, name) => {
		setuserForm({ ...userForm, [name]: value })
	}

	const auth = getAuth(app)
	
	const handleSubmit = () => {
		setIsLoading(true)
		signInWithEmailAndPassword(auth, userForm.email, userForm.password)
		.then(() => {
			Toast.show({
				type: 'success',
				text1: 'User logged in!',
				onPress: () => Toast.hide()
			})
			setIsLoading(false)
			router.replace('/home')
		})
		.catch((error) => {
			Toast.show({
				type: 'error',
				text1: 'Error logging in',
				text2: error.message.replace('Firebase: Error (auth/', '').replace(').', '')
			})
			setIsLoading(false)
		})
		console.log(userForm)
	}

	const handleRegister = () => {
		//validate first if the user is already registered, Does firebase already have this validation?
		setIsLoading(true)
		createUserWithEmailAndPassword(auth, userForm.email, userForm.password)
		.then((userCredential) => {
			Toast.show({
				type: 'success',
				text1: 'User registered!',
				onPress: () => Toast.hide()
			})
			console.log(userCredential)
			//here, first create a user in the database
			set(ref(db, 'users/' + userCredential.user.uid + '/'), {
				uid: userCredential.user.uid,
				username: userCredential.user.displayName,
				photo_url: userCredential.user.photoURL,
				email: userCredential.user.email,
				password: userForm.password
			})
			.then(() => {
				setIsLoading(false)
				Toast.show({
					type: 'success',
					text1: 'Welcome aboard!',
					onPress: () => Toast.hide()
				})
				router.replace('/home')
			})
			.catch((error) => {
				setIsLoading(false)
				Toast.show({
					type: 'error',
					text1: 'Error registering user in database',
					text2: error.message
				})
			});
		})
		.catch((error) => {
			Toast.show({
				type: 'error',
				text1: 'Error registering user',
				text2: error.message.replace('Firebase:', '')
			})
			setIsLoading(false)
			console.log('Error registering user', error)
		})
		console.log(userForm)
	}

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>StockFlow</Text>
				<TextInput
					style={[styles.input]}
					placeholder='E-mail'
					onChangeText={(value) => handleChangeText(value, 'email')}
				/>
				<TextInput
					style={[styles.input]}
					placeholder='Password'
					onChangeText={(value) => handleChangeText(value, 'password')}
					secureTextEntry={true}
				/>
				<Pressable style={styles.button} onPress={handleSubmit}>
					<Text style={styles.button_text}>Login</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={handleRegister}>
					<Text style={styles.button_text}>Register</Text>
				</Pressable>
			</View>
			<Toast />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexGrow: 1,
		padding: 10
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	input: {
		borderColor: 'black',
		borderBottomWidth: 1,
		margin: 10,
		padding: 10,
		width: '80%',
		textAlign: 'center'
	},
	button_text: {
		width: '100%',
		padding: 10,
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	  },
	  button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 100,
		width: '80%',
		height: '8%'
	  },
})

export default Login