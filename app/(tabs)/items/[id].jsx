import React, { useState, useEffect } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { getDatabase, ref, onValue } from 'firebase/database'

const Item = () => {
  const { id } = useLocalSearchParams()
  const [item, setItem] = useState({})

  const getItem = () => {
    const db = getDatabase()
    onValue(ref(db, `items/${id}`), (snapshot) => {
      const data = snapshot.val()
      console.log(data)
      setItem(data)
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
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20
        }}
        >{item.name}
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
        >{item.description}
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
