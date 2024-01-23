import React from 'react'
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import products from '../../../src/data/products'

const Item = () => {
  const { id } = useLocalSearchParams()

  const item = products.find(product => product.id === +id)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, flexDirection: 'column', gap: 20, padding: 20 }}>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20
        }}
        >{item.title}
        </Text>
        <View style={{ width: '100%', height: 300 }}>
          <Image style={{ height: '100%', width: '100%', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain' }} source={{ uri: item.image }} />
        </View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20
        }}
        >${item.price}
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          <Text>Quantity:</Text>
          <Text>{1}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Item
