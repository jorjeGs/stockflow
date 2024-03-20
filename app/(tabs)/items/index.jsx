import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import products from '../../../src/data/products'
import CustomFloatingButton from '../../../src/components/CustomFloatingButton'
import ItemCard from '../../../src/components/ItemCard'

const ItemsHomePage = () => {
  const [showText, setShowText] = useState(true)

  const handleScroll = (event) => {
    // Lógica para detectar el movimiento de scroll
    const offsetY = event.nativeEvent.contentOffset.y
    if (offsetY > 0 && showText) {
      setShowText(false)
      setTimeout(() => {
        setShowText(true)
      }, 500)
    }
  }

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ marginTop: 5 }}>
        <FlatList
          scrollEventThrottle={16}
          onScroll={handleScroll}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1 }} />
          )}
          data={products}
          renderItem={({ item }) => <ItemCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <CustomFloatingButton
        text='Nuevo'
        icon='plus'
        pathname='items/New'
        obj={{}}
        showText={showText}
      />
    </View>
  )
}

export default ItemsHomePage
