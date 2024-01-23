import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { router } from 'expo-router'

const HomePage = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Pressable
          style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
          onPress={() => router.push({
            pathname: 'items/New'
          })}
        >
          <Text style={{ color: 'white' }}>New Item</Text>
        </Pressable>
        <Pressable
          style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
          onPress={() => router.push({
            pathname: 'home/[user]',
            params: { user: 'John Doe' }
          })}
        >
          <Text style={{ color: 'white' }}>User</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default HomePage
