import React from 'react'
import { Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { Entypo, MaterialIcons, FontAwesome6 } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={
      {
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0
        }
      }
    }
      >
        <Tabs.Screen
          name='home' options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Entypo name='home' size={20} color={focused ? 'red' : 'black'} />
                  <Text style={{ color: focused ? 'red' : 'black' }}>Inicio</Text>
                </View>
              )
            }
          }}
        />
        <Tabs.Screen
          name='items' options={{
            title: 'Items',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <MaterialIcons name='inventory' size={20} color={focused ? 'red' : 'black'} />
                  <Text style={{ color: focused ? 'red' : 'black' }}>Artículos</Text>
                </View>
              )
            }
          }}
        />
        <Tabs.Screen
          name='stores' options={{
            title: 'Tiendas',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesome6 name='store' size={20} color={focused ? 'red' : 'black'} />
                  <Text style={{ color: focused ? 'red' : 'black' }}>Tiendas</Text>
                </View>
              )
            }
          }}
        />
      </Tabs>
      <Toast />
    </>
  )
}

export default TabsLayout
