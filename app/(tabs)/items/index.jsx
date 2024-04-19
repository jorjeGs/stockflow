import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import CustomFloatingButton from '../../../src/components/CustomFloatingButton'
import ItemCard from '../../../src/components/ItemCard'
import { getDatabase, ref, onValue } from 'firebase/database'

const ItemsHomePage = () => {
  const [showText, setShowText] = useState(true)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const db = getDatabase()

  const getItems = () => {
    setIsLoading(true)
    let items = []

    onValue(ref(db, 'items'), (snapshot) => {
      const data = snapshot.val()
      setIsLoading(false)
      if (!data) return
      items = Object.keys(data).map((key) => {
        return {
          id: key,
          name: data[key].name,
          description: data[key].description,
          qty: data[key].qty
        }
      })
      setItems(items)
    }, (error) => {
      setIsLoading(false)
      console.log('Error: ' + error)
    })
  }

  useEffect(() => {
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
        {isLoading && <ActivityIndicator style={{ left: 0, right: 0, bottom: 0, top: 0, position: 'absolute', zIndex: 9999 }} size='large' color='black' />}
        {items.length === 0 && !isLoading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>No se encontraron articulos</Text></View>}
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
