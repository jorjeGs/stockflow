import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-web'

const User = () => {
  const { user_uid } = useLocalSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  

  return (
    <SafeAreaView>
		<ScrollView style={styles.container}>
			{isLoading && <ActivityIndicator style={{ left: 0, right: 0, bottom: 0, top: 0, position: 'absolute', zIndex: 9999 }} size='large' color='black' />}
			<View style={{ width: '100%', flexDirection: 'column', gap: 20 }}>
				<Image style={{ height: '60%', width: '60%', alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3134/3134241.png'}} />
			</View>
		</ScrollView>
	</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	flexDirection: 'column',
	gap: 20,
	padding:20,
  }
})


export default User
