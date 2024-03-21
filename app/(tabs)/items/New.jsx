import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../../../firebaseConfig'
import * as crypto from 'expo-crypto'

const New = () => {
  const initialItemState = {
    name: '',
    description: ''
  }

  const [state, setState] = useState(initialItemState)

  const db = getDatabase(app)

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value })
  }

  const saveItem = async () => {
    // add a random id to the item
    const newItem = {
      ...state,
      id: crypto.randomUUID()
    }
    await set(ref(db, 'items/' + newItem.id + '/'), newItem)
    // clear state
    setState(initialItemState)
    console.log(newItem)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'red' }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText(value, 'name')}
          value={state.name}
          placeholder='Nombre'
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText(value, 'description')}
          value={state.description}
          placeholder='Descripción'
        />
        <Pressable
          style={styles.button}
          title='Guardar'
          onPress={saveItem}
        >
          <Text style={styles.button_text}>Guardar</Text>
          <MaterialIcons name='save' style={styles.button_icon} color='white' />
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: '100%',
    justifyContent: 'space-evenly'

  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 60,
    width: '60%',
    height: '13%'
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  button_icon: {
    color: 'white',
    fontSize: 25
  }
}

export default New
