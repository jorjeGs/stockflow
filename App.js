import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native'

export default function App () {
  console.log('Hola mundo!')
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => Alert.alert('Text pressed')}>
        <Text style={styles.text}>Hola mundo yes!</Text>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 20
  }
})
