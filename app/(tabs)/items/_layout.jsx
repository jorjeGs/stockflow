import { Stack } from 'expo-router'
import React from 'react'

const ItemsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index' options={
        {
          headerShown: true,
          headerTitle: 'Item List'
        }
      }
      />
      <Stack.Screen name='New' options={{ headerTitle: 'New Item', headerShown: true }} />
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: true,
          headerTitle: 'Item'
        }}
      />
    </Stack>
  )
}

export default ItemsLayout
