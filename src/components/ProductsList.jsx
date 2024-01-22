import React from 'react'
import { Text, View, FlatList, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import products from '../data/products'

const ProductsList = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: 'gray' }} />
      )}
      data={products}
      renderItem={({ item }) => (
        <Link
          push href={
          {
            pathname: '/items/[id]',
            params: { id: item.id }
          }
        } asChild
        >
          <Pressable>
            <View style={{ padding: 20, flex: 1, flexDirection: 'row', gap: 10, width: '100%' }}>
              <Text style={{ width: '33.33%' }}>{item.title}</Text>
              <View style={{ width: '33.33%', justifyContent: 'center' }}>
                <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto' }}>${item.price}</Text>
              </View>
              <View style={{ width: '33.33%', height: 80 }}>
                <Image
                  style={{ height: '100%', width: '100%', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain' }}
                  source={{
                    uri: item.image
                  }}
                />
              </View>
            </View>
          </Pressable>
        </Link>
      )}
      keyExtractor={item => item.id}
    />
  )
}

export default ProductsList
