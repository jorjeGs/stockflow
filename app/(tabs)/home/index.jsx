import React from 'react'
import { Text, View, Alert, Pressable } from 'react-native'
import { router } from 'expo-router'

const HomePage = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Pressable
          style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
          onPress={() => router.push({
            pathname: 'items'
          })}
        >
          <Text style={{ color: 'white' }}>Go to Inventory</Text>
        </Pressable>
        <Pressable
          style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
          onPress={() => Alert.alert('Add Items')}
        >
          <Text style={{ color: 'white' }}>Add Items</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default HomePage
