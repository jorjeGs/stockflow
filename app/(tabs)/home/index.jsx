import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

const HomePage = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Pressable
          style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
          onPress={() => router.push({
            pathname: 'items/New'
          })}
        >
          <Text style={{ color: 'white' }}>New Item</Text>
        </Pressable>
        <Pressable
          style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
          onPress={() => router.push({
            pathname: 'home/[user]',
            params: { user: 'John Doe' }
          })}
        >
          <Text style={{ color: 'white' }}>User</Text>
        </Pressable>
      </View>
      <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', padding: 10 }}>
        <Pressable
          style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'red', shadowColor: 'gray', padding: 10, borderRadius: 5, width: '100%', height: '15%' }}
          onPress={() => router.push({ pathname: 'reportes' })}
        >
          <Text style={{ color: 'white', fontWeight: 800 }}>Reportes</Text>
          <Ionicons name='document' size={20} color='white' />
        </Pressable>
        <Pressable
          style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'red', shadowColor: 'gray', padding: 10, borderRadius: 5, width: '100%', height: '15%' }}
          onPress={() => router.push({ pathname: 'reportes' })}
        >
          <Text style={{ color: 'white', fontWeight: 800 }}>Ajustar Inventario</Text>
          <FontAwesome5 name='balance-scale' size={20} color='white' />
        </Pressable>
        <Pressable
          style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'red', shadowColor: 'gray', padding: 10, borderRadius: 5, width: '100%', height: '15%' }}
          onPress={() => router.push({ pathname: 'reportes' })}
        >
          <Text style={{ color: 'white', fontWeight: 800 }}>Configuracion</Text>
          <Ionicons name='settings' size={20} color='white' />
        </Pressable>
      </View>
    </View>
  )
}
export default HomePage
