import React, { useState, useEffect } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView, StyleSheet, ActivityIndicator, TextInput } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { getDatabase, ref, onValue, update, set } from 'firebase/database'
import Toast from 'react-native-toast-message'

const Item = () => {
  const { id } = useLocalSearchParams()
  const [originalItem, setOriginalItem] = useState({})
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getItem = () => {
    const db = getDatabase()
    onValue(ref(db, `items/${id}`), (snapshot) => {
      const data = snapshot.val()
      setItem(data)
      setOriginalItem(data)
      setIsLoading(false)
    }, (error) => {
      Toast.show({
        type: 'error',
        text1: 'Error al obtener el item',
        text2: error.message
      })
      router.back()
      console.log('Error: ' + error)
      setIsLoading(false)
    })
  }

  const handleItemInfo = (value, name) => {
    setItem({ ...item, [name]: value })
  }

  const updateItem = () => {
    const db = getDatabase()
    setIsLoading(true)
    update(ref(db, `items/${id}`), item)
      .then(() => {
        setIsLoading(false)
        setOriginalItem(item)
        Toast.show({
          type: 'success',
          text1: 'Item actualizado!',
          onPress: () => Toast.hide()
        })
        router.back()
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Error al actualizar el item',
          text2: error.message
        })
        console.log('Data could not be updated.', error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getItem()
  }, [id])

  const onFocus = (styleName) => {
    console.log(styleName)
    if (styles[styleName].borderColor === 'transparent') {
      console.log('setting border color')
      styles[styleName].borderColor = 'gray'
    } else {
      styles[styleName].borderColor = 'transparent'
    }
    console.log(styles[styleName].borderColor)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, flexDirection: 'column', gap: 20, padding: 20 }}>
        {isLoading && <ActivityIndicator style={{ left: 0, right: 0, bottom: 0, top: 0, position: 'absolute', zIndex: 9999 }} size='large' color='black' />}
        <TextInput
          style={[styles.textName]}
          onChangeText={(value) => handleItemInfo(value, 'name')}
          value={item.name}
          onFocus={() => onFocus('textName')}
        />
        <View style={{ width: '100%', height: 300 }}>
          <Image style={{ height: '80%', width: '80%', marginRight: 'auto', marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', objectFit: 'contain' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3134/3134241.png' }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>Descripción</Text>
          <TextInput
            style={[styles.textDescription]}
            onChangeText={(value) => handleItemInfo(value, 'description')}
            value={item.description}
            onFocus={() => onFocus('textDescription')}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.textQty, { }]}>Cantidad</Text>
          <Text style={styles.textQtyValue}>{item.qty}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

let styles = StyleSheet.create({
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    borderBottomWidth: 2,
    padding: 2,
    borderColor: 'transparent'
  },
  textQtyValue: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 40
  },
  textQty: {
    fontSize: 16
  },
  textDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    borderBottomWidth: 2,
    padding: 2,
    borderColor: 'transparent'
  }
})

export default Item
