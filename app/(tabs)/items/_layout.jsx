import { Stack } from 'expo-router'
import React from 'react'

const ItemsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index' options={
        {
          headerShown: true,
          headerTitle: 'Product List'
        }
      }
      />
      <Stack.Screen name='[id]' options={{ headerTitle: 'Item', headerShown: true }} />
      <Stack.Screen name='New' options={{ headerTitle: 'New Item', headerShown: true }} />
    </Stack>
  )
}

export default ItemsLayout
