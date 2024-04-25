import React, {useState} from 'react'
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'

const Login = () => {
	const [userForm, setuserForm] = useState({
		username: '',
		password: ''
	})

	const handleChangeText = (value, name) => {
		setuserForm({ ...userForm, [name]: value })
	}
	
	const handleSubmit = async () => {
		//login logic
		console.log(userForm)
		router.replace('/home')
	}

	const handleRegister = async () => {
		//register logic
		console.log(userForm)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>StockFlow</Text>
			<TextInput
				style={[styles.input]}
				placeholder='E-mail'
				onChangeText={(value) => handleChangeText(value, 'username')}
			/>
			<TextInput
				style={[styles.input]}
				placeholder='Password'
				onChangeText={(value) => handleChangeText(value, 'password')}
			/>
			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.button_text}>Login</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={handleRegister}>
				<Text style={styles.button_text}>Register</Text>
			</Pressable>
		</View>
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