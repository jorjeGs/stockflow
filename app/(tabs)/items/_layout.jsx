import { Stack } from 'expo-router'
import React from 'react'

const ItemsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index' options={
        {
          headerShown: false,
          headerTitle: ''
        }
      }
      />
      <Stack.Screen name='New' options={{ headerTitle: 'New Item', headerShown: true }} />
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: true,
          headerTitle: 'Editar Articulo'
        }}
      />
    </Stack>
  )
}

export default ItemsLayout
