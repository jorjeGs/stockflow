import React from 'react'
import { Text, View } from 'react-native'

const Inventory = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Text style={{ textAlign: 'center', backgroundColor: 'green', color: 'white', fontSize: 30, fontWeight: 'bold' }}>Inventory</Text>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 5 }}>
        <Text>Inventory</Text>
      </View>
    </View>
  )
}

export default Inventory
