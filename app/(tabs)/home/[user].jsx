import React from 'react'
import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const User = () => {
  const { user } = useLocalSearchParams()

  return (
    <View>
      <Text>{user}</Text>
    </View>
  )
}

export default User
