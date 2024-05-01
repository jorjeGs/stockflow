import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: true,
          headerTitle: 'Dashboard'
        }}
      />
      <Stack.Screen
        name='[user_uid]'
        options={{
          headerShown: true,
          headerTitle: 'Usuario'
        }}
      />
      <Stack.Screen
        name='reports'
        options={{
          headerShown: true,
          headerTitle: 'Reportes'
        }}
      />
    </Stack>
  )
}

export default HomeLayout
