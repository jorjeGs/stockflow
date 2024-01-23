import React from 'react'
import { Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { Entypo, MaterialIcons, FontAwesome6 } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
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
                <Text style={{ color: focused ? 'red' : 'black' }}>Home</Text>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name='items' options={{
          title: 'Inventory',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name='inventory' size={20} color={focused ? 'red' : 'black'} />
                <Text style={{ color: focused ? 'red' : 'black' }}>Inventory</Text>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name='lists' options={{
          title: 'Lists',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome6 name='list-check' size={20} color={focused ? 'red' : 'black'} />
                <Text style={{ color: focused ? 'red' : 'black' }}>Lists</Text>
              </View>
            )
          }
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
