import React from 'react'
import { Alert, Text, View, Pressable } from 'react-native'

import ProductsList from './ProductsList'
import { router } from 'expo-router'

const Main = () => {
  return (
    <View style={{ marginTop: 0 }}>
      <Text style={{ textAlign: 'center', backgroundColor: 'green', color: 'white', fontSize: 30, fontWeight: 'bold' }}>StockFlow</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Pressable
          style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
          onPress={() => router.push('/inventory/1')}
        >
          <Text style={{ color: 'white' }}>Go to Stock</Text>
        </Pressable>
        <Pressable
          style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
          onPress={() => Alert.alert('Add Items')}
        >
          <Text style={{ color: 'white' }}>Add Items</Text>
        </Pressable>
      </View>
      <ProductsList />
    </View>
  )
}
export default Main