import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen name='items' options={{ title: 'Inventory', headerShown: false }} />
      <Tabs.Screen name='lists' options={{ title: 'Lists', headerShown: false }} />
    </Tabs>
  )
}

export default TabsLayout
