import React, {useState, useEffect} from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import { login, register } from '../src/services/auth'
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
	
	const handleSubmit = () => {
		setIsLoading(true)
		login(userForm.email, userForm.password)
		setIsLoading(false)
	}

	const handleRegister = () => {
		//validate first if the user is already registered, Does firebase already have this validation?
		setIsLoading(true)
		register(userForm.email, userForm.password)
		setIsLoading(false)
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