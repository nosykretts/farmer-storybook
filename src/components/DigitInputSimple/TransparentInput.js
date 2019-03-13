import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native'
import Input from '../Input'
import { ThemeConsumer } from 'react-native-elements'

import DigitInputItem from './DigitInputItem'

class TransparentInput extends React.Component {
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
      },
      () => {
        props.onFocus && props.onFocus(x)
      }
    )
  }

  handleOnBlur = e => {
    const { props, state } = this
    this.setState(prevState => {
      return {
        isFocused: false
      }
    })
    props.onBlur && props.onBlur(e)
  }

  render() {
    const { style, state, props } = this
    const { isFocused } = state
    console.log('ccc', props)
    return (
      <ThemeConsumer>
        {({ theme }) => {
          return (
            <>
              <View style={styles.digitWrapper}>
                {Array.apply(0, Array(props.howMuch)).map(function(x, i) {
                  return (
                    <DigitInputItem
                      key={i}
                      digit={props.digitString[i]}
                      howMuch={props.howMuch}
                      style={StyleSheet.flatten([
                        props.style,
                        isFocused && styles.inputContainerFocused,
                        props.isError && styles.inputContainerError
                      ])}
                    />
                  )
                })}
              </View>
              <TextInput
                {...props}
                onFocus={this.handleFocus}
                onBlur={this.handleOnBlur}
                style={StyleSheet.flatten([
                  theme.Input.inputStyle,
                  props.style,
                  {
                    // backgroundColor: 'red',
                    opacity: 0
                    // borderBottomWidth: 0
                  }
                ])}
              />
            </>
          )
        }}
      </ThemeConsumer>
    )
  }
}

const styles = StyleSheet.create({
  inputContainerFocused: {
    borderColor: 'green'
  },
  inputContainerError: {
    borderColor: 'red'
  },
  digitWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute'
  }
})

export default TransparentInput
