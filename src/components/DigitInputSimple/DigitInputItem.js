import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

import { ThemeConsumer, Input } from 'react-native-elements'

class DigitInputItem extends React.Component {
  render() {
    const { props } = this
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <View
            {...props}
            style={StyleSheet.flatten([
              styles.root(theme, props.howMuch),
              props.style,
            ])}
          >
            <Text style={StyleSheet.flatten([styles.text(theme)])}>
              {props.digit}
            </Text>
          </View>
        )}
      </ThemeConsumer>
    )
  }
}

const styles = StyleSheet.create({
  root: ({ Input: { inputContainerStyle, inputStyle } }, howMuch) => ({
    borderStyle: 'solid',
    borderColor: inputContainerStyle.borderColor,
    borderRadius: inputContainerStyle.borderRadius,
    borderWidth: inputContainerStyle.borderWidth,
    backgroundColor: inputStyle.backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    maxWidth: `${85 / howMuch}%`
  }),
  text: ({ Input }) => ({
    fontSize: Input.inputStyle.fontSize,
    color: Input.inputStyle.color
  })
})

DigitInputItem.defaultProps = {
  digit: '-'
}

DigitInputItem.propTypes = {
  digit: PropTypes.any.isRequired
}

export default DigitInputItem
