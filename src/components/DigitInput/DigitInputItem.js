import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

class DigitInputItem extends React.Component {
  render() {
    const { props } = this
    return (
      <View {...props} style={StyleSheet.flatten([props.style, styles.root(props.howMuch)])}>
        <Text style={styles.text}>
          {props.digit}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: howMuch => ({
    borderStyle: 'solid',
    borderColor: 'grey',
    aspectRatio: 12/9,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    maxWidth: `${85/howMuch}%`,
    // margin: 5
  }),
  text: {
    // backgroundColor: 'red',
    // fontSize: 18,
  }
})

DigitInputItem.defaultProps = {
  digit: '-'
}

DigitInputItem.propTypes = {
  digit: PropTypes.any.isRequired
}

export default DigitInputItem
