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
    </Stack>
  )
}

export default HomeLayout
