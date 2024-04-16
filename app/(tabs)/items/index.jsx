import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import CustomFloatingButton from '../../../src/components/CustomFloatingButton'
import ItemCard from '../../../src/components/ItemCard'
import { getDatabase, ref, onValue } from 'firebase/database'

const ItemsHomePage = () => {
  const [showText, setShowText] = useState(true)
  const [items, setItems] = useState([])

  const db = getDatabase()

  const getItems = () => {
    const items = []
    onValue(ref(db, 'items'), (snapshot) => {
      const data = snapshot.val()
      console.log(data)
      for (const key in data) {
        items.push({ ...data[key], id: key })
      }
      setItems(items)
    },
    {
      onlyOnce: true
    })
  }

  useEffect(() => {
    // Lógica para cargar los datos de la base de datos
    getItems()
  }, [db])

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
      <View style={{ marginTop: 5, minHeight: '100%' }}>
        <FlatList
          scrollEventThrottle={16}
          onScroll={handleScroll}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1 }} />
          )}
          data={items}
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
