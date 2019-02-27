import React from 'react'
import { View, StyleSheet } from 'react-native'

const CenterView = props => (
  <View {...props} style={StyleSheet.flatten([styles.root, props.style])} />
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CenterView
