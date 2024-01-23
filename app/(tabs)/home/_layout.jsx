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
        name='[user]'
        options={{
          headerShown: true,
          headerTitle: 'User'
        }}
      />
    </Stack>
  )
}

export default HomeLayout
