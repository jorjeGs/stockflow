import { Stack } from 'expo-router'
import React from 'react'

const ListsLayout = () => {
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
    </Stack>
  )
}

export default ListsLayout
