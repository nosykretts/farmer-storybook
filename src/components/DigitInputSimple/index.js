import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'react-native-elements'
import Input from '../Input'
import TransparentInput from './TransparentInput'

class DigitInputSimple extends React.Component {
  state = {
    digitString: ''
  }

  handleOnChangeText = text => {
    const { props } = this
    const digitOnly = text.replace(/[^0-9\.]+/g, '')
    if (digitOnly.length <= this.props.howMuch) {
      this.setState({ digitString: digitOnly }, () => {
        props.onChangeText && props.onChangeText(digitOnly)
      })
    }
  }

  render() {
    const { props, state } = this
    console.log('sdsd', props)
    return (
      <ThemeConsumer>
        {({ theme }) => {
          return (
            <Input
              {...props}
              {...state}
              inputContainerStyle={StyleSheet.flatten([
                props.inputContainerStyle,
                styles.inputContainer(theme),
              ])}
              returnKeyType="done"
              inputComponent={TransparentInput}
              keyboardType="number-pad"
              selectTextOnFocus={false}
              value={state.digitString}
              onChangeText={this.handleOnChangeText}
              isError={!!props.errorMessage}
            />
          )
        }}
      </ThemeConsumer>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: theme => ({
    borderColor: 'transparent',
    borderWidth: 0,
    borderBottomWidth: 0,
    // backgroundColor: 'red'
  }),
  inputContainerError: theme => ({
    borderColor: 'red'
  }),
})

DigitInputSimple.propTypes = {
  howMuch: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default DigitInputSimple
