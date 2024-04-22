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
			<TextInput
				style={[styles.input]}
				onChangeText={(value) => handleChangeText(value, 'username')}
			/>
			<TextInput
				style={[styles.input]}
				onChangeText={(value) => handleChangeText(value, 'password')}
			/>
			<Pressable onPress={handleSubmit}>
				<Text>Submit</Text>
			</Pressable>
			<Pressable onPress={handleRegister}>
				<Text>Register</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		padding: 10
	}
})

export default Login