import React, { useState, useEffect } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { getDatabase, ref, onValue } from 'firebase/database'

const Item = () => {
  const { id } = useLocalSearchParams()
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getItem = () => {
    const db = getDatabase()
    onValue(ref(db, `items/${id}`), (snapshot) => {
      const data = snapshot.val()
      console.log(data)
      setItem(data)
      setIsLoading(false)
    },
    {
      onlyOnce: true
    })
  }

  useEffect(() => {
    getItem()
  }, [id])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, flexDirection: 'column', gap: 20, padding: 20 }}>
        {isLoading && <ActivityIndicator style={{ left: 0, right: 0, bottom: 0, top: 0, position: 'absolute', zIndex: 9999 }} size='large' color='black' />}
        <Text style={styles.textName}>{item.name}</Text>
        <View style={{ width: '100%', height: 300 }}>
          <Image style={{ height: '100%', width: '100%', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain' }} source={{ uri: item.image }} />
        </View>
        <Text style={styles.textDescription}>{item.description}</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          <Text>Quantity:</Text>
          <Text>{1}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  textQtyValue: {
    fontSize: 20
  },
  textDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  }
})

export default Item
