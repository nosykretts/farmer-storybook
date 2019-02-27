import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as RNEButton } from 'react-native-elements'

const Button = props => (
  <RNEButton
    {...props}
    buttonStyle={StyleSheet.flatten([styles.buttonStyle, props.buttonStyle])}
    titleStyle={StyleSheet.flatten([styles.titleStyle, props.titleStyle])}
  />
)

const styles = StyleSheet.create({
  buttonStyle: {},
  // titleStyle: {
  //   textTransform: 'uppercase',
  // }
})

export default Button
