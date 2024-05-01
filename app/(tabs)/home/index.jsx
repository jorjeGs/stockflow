import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { getAuth, signOut } from 'firebase/auth'

const HomePage = () => {

  const auth = getAuth()

  console.log(auth)

  const signOutUser = () => {
	signOut(auth)
	  .then(() => {
		console.log('Sign out successful')
		router.replace({ pathname: 'login' })
	  })
	  .catch((error) => {
		console.log(error)
	  })
  }

  console.log(auth)

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', padding: 10 }}>
        <Pressable
          style={stilos.button}
          onPress={() => router.push({
            pathname: 'home/[user_uid]',
            params: { user_uid: auth.currentUser.uid }
          })}
        >
          <Text style={stilos.button_text}>Usuario</Text>
          <Ionicons name='person' style={stilos.button_icon} color='white' />
        </Pressable>
        <Pressable
          style={stilos.button}
          onPress={() => router.push({ pathname: 'home/reports' })}
        >
          <Text style={stilos.button_text}>Reportes</Text>
          <Ionicons name='document' style={stilos.button_icon} color='white' />
        </Pressable>
        <Pressable
          style={stilos.button}
          onPress={() => router.push({ pathname: 'reportes' })}
        >
          <Text style={stilos.button_text}>Surtir tienda</Text>
          <FontAwesome5 name='balance-scale' style={stilos.button_icon} color='white' />
        </Pressable>
        <Pressable
          style={stilos.button}
          onPress={signOutUser}
        >
          <Text style={stilos.button_text}>Cerrar sesión</Text>
          <Ionicons name='settings' style={stilos.button_icon} color='white' />
        </Pressable>
      </View>
    </View>
  )
}

const stilos = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      height: '15%'
    },
    button_text: {
      width: '50%',
      padding: 10,
      textAlign: 'left',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    },
    button_icon: {
      width: '50%',
      padding: 10,
      textAlign: 'right',
      color: 'white',
      fontSize: 35
    }
  })

export default HomePage
