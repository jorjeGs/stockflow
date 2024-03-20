import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

const HomePage = () => {
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

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', padding: 10 }}>
        <Pressable
          style={stilos.button}
          onPress={() => router.push({
            pathname: 'home/[user]',
            params: { user: 'John Doe' }
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
          onPress={() => router.push({ pathname: 'reportes' })}
        >
          <Text style={stilos.button_text}>Configuracion</Text>
          <Ionicons name='settings' style={stilos.button_icon} color='white' />
        </Pressable>
      </View>
    </View>
  )
}

export default HomePage
