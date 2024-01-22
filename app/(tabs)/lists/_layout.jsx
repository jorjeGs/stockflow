import { Stack } from 'expo-router'
import React from 'react'

const ListsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index' options={
        {
          headerShown: true,
          headerTitle: 'Lists'
        }
      }
      />
    </Stack>
  )
}

export default ListsLayout
