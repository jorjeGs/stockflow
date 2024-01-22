import React from 'react'
import { Text, View, FlatList, Image, Pressable, Alert } from 'react-native'
// import { router } from 'expo-router'
import products from '../../../src/data/products'

const ItemsHomePage = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ marginTop: 5 }}>
        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: 'gray' }} />
          )}
          data={products}
          renderItem={({ item }) => (
            <Pressable onPress={
            // () => router.push({
            //   pathname: '/items/new'
            // })
            () => Alert.alert('Item', 'Item')
          }
            >
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
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default ItemsHomePage
