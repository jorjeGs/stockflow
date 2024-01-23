import React from 'react'
import { View, FlatList } from 'react-native'
import products from '../../../src/data/products'
import ItemCard from '../../../src/components/ItemCard'

const ItemsHomePage = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ marginTop: 5 }}>
        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ height: 1 }} />
          )}
          data={products}
          renderItem={({ item }) => <ItemCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default ItemsHomePage
