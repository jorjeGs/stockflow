import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View, Image } from 'react-native'
import products from '../../../src/data/products'

const Inventory = () => {
  const { id } = useLocalSearchParams()

  const item = products.find(product => product.id === +id)

  return (
    <View style={{ flexGrow: 1, flex: '1', flexDirection: 'column', gap: 50, padding: 20 }}>
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
    </View>
  )
}

export default Inventory
