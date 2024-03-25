import React from 'react'
import { Text, View, Image, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import products from '../../../src/data/products'

const Item = () => {
  const { id } = useLocalSearchParams()

  const item = products.find(product => product.id === +id)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, flexDirection: 'column', gap: 20, padding: 20 }}>
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
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.textQty}>Quantity:</Text>
          <Text style={styles.textQtyValue}>{item}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.textDescription}>{item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textQty: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textQtyValue: {
    fontSize: 20
  },
  textDescription: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default Item
