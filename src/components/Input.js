import React, { Component } from 'react'
import { Input as RNEInput } from 'react-native-elements'
import { Alert, StyleSheet } from 'react-native'

const conditionalStyle = (condition, style) => (condition ? style : {})

class Input extends React.Component {
  state = {
    isFocused: false
  }

  handleFocus = x => {
    const { props, state } = this
    this.setState(
      prevState => {
        return {
          isFocused: true
        }
      }
    )
    if(props.onFocus){
      props.onFocus(x)
    }
  }

  handleOnBlur = (e) => {
    const { props, state } = this
    this.setState(
      prevState => {
        return {
          isFocused: false
        }
      })
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  render() {
    const { props, state } = this
    const { isFocused } = state
    const { labelStyle, inputContainerStyle, errorMessage, ...restProps } = props
    return (
      <RNEInput
        {...restProps}
        errorMessage={errorMessage ? errorMessage : ' '}
        onFocus={this.handleFocus}
        onBlur={this.handleOnBlur}
        labelStyle={StyleSheet.flatten([
          labelStyle,
          // isFocused && styles.labelStyleFocused
          errorMessage && styles.labelStyleError
        ])}
        inputContainerStyle={StyleSheet.flatten([
          inputContainerStyle,
          isFocused && styles.inputContainerStyleFocused,
          errorMessage && styles.inputContainerStyleError
        ])}
      />
    )
  }
}

const styles = StyleSheet.create({
  inputContainerStyleFocused: {
    borderColor: 'green'
  },
  inputContainerStyleError: {
    borderColor: 'red'
  },
  labelStyleFocused: {
    color: 'green'
  },
  labelStyleError: {
    color: 'red'
  }
})
export default Input
