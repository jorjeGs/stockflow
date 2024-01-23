import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='(tabs)' options={
        {
          headerShown: true,
          headerTitle: 'StockFlow',
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold'
          }
        }
      }
      />
    </Stack>
  )
}

export default RootLayout
