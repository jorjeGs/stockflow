import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { router } from 'expo-router'
import PropTypes from 'prop-types'

const ItemCard = ({ item }) => {
  if (!item) {
    return (
      <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No item found</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', gap: 20, padding: 10 }} key={item.id}>
      <Pressable
        style={{ width: '100%', flex: 1, flexDirection: 'row', gap: 10, backgroundColor: 'white', borderRadius: 20, padding: 10 }}
        onPress={() => router.push({
          pathname: 'items/[id]',
          params: { id: item.id }
        })}
      >
        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold'
          }}
          >{item.title}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
          <Text style={{ color: 'gray', fontSize: 10 }}>QTY</Text>
          <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto' }}>5</Text>
        </View>
        <View style={{ flex: 2, minHeight: 80 }}>
          <Image
            style={{ height: '100%', width: '100%', marginRight: 'auto', marginLeft: 'auto', marginBottom: 'auto', marginTop: 'auto', objectFit: 'contain' }}
            source={{
              uri: item.image
            }}
          />
        </View>
      </Pressable>
    </View>
  )
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
  })
}

export default ItemCard
