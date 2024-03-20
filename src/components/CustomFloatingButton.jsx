import React, { useState, useEffect } from 'react'
import { Pressable, Text, Animated, Easing } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { router } from 'expo-router'

const CustomFloatingButton = ({ text, icon, pathname, obj, showText = true }) => {
  const scaleValue = useState(new Animated.Value(1))[0]

  useEffect(() => {
    if (!showText) {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300, // Duración de la animación de salida
        easing: Easing.ease,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300, // Duración de la animación de entrada
        easing: Easing.ease,
        useNativeDriver: true
      }).start()
    }
  }, [showText, scaleValue])

  return (
    <Animated.View
      style={[{ transform: [{ scale: scaleValue }] }]}
    >
      <Pressable
        style={[styles.floatingButton, showText && styles.showText]}
        onPress={() => {
          router.push({
            pathname,
            params: obj
          })
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
          {showText ? text + '  ' : ''}
          <FontAwesome6 name={icon} size={21} color='white' />
        </Text>
      </Pressable>
    </Animated.View>
  )
}

const styles = {
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  showText: {
    minWidth: 150
  }
}

CustomFloatingButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  pathname: PropTypes.string,
  obj: PropTypes.object,
  showText: PropTypes.bool
}

export default CustomFloatingButton
