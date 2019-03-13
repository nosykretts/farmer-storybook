import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TextInput,
  Keyboard,
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'react-native-elements'

import DigitInputItem from './DigitInputItem'

class DigitInput extends React.Component {
  state = {
    digitString: ''
  }

  handleOnChangeText = text => {
    const digitOnly = text.replace(/[^0-9\.]+/g, '')
    if (digitOnly.length <= this.props.howMuch) {
      this.setState({ digitString: digitOnly }, () => {})
    }
  }

  handleOnBlur = () => {
    console.log('on blur called')
  }

  render() {
    const { props, state } = this
    return (
      <ThemeConsumer>
        {({ theme }) => {
          return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View
                style={StyleSheet.flatten([
                  theme.Input.containerStyle,
                  styles.root
                ])}
              >
                {props.label && (
                  <Text style={StyleSheet.flatten([theme.Input.labelStyle])}>
                    {props.label}
                  </Text>
                )}
                <View style={styles.digitWrapper}>
                  {Array.apply(0, Array(props.howMuch)).map(function(x, i) {
                    return (
                      <DigitInputItem
                        key={i}
                        digit={state.digitString[i]}
                        howMuch={props.howMuch}
                      />
                    )
                  })}
                </View>
                <View
                  style={StyleSheet.flatten([
                    theme.Input.inputContainerStyle,
                    styles.inputContainer(theme)
                  ])}
                >
                  <TextInput
                    returnKeyType='done'
                    style={StyleSheet.flatten([
                      theme.Input.inputStyle,
                      styles.input(theme)
                    ])}
                    // underlineColorAndroid
                    // underlineColorAndroid=""
                    keyboardType="number-pad"
                    selectTextOnFocus={false}
                    value={state.digitString}
                    onChangeText={this.handleOnChangeText}
                    onEndEditing={this.handleOnBlur}
                    onBlur={this.handleOnBlur}
                  />
                </View>
                {props.errorMessage && (
                  <Text style={StyleSheet.flatten(
                    theme.Input.errorStyle,
                    // props.errorStyle
                  )}>
                    {props.errorMessage}
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          )
        }}
      </ThemeConsumer>
    )
  }
}

const styles = StyleSheet.create({
  root: {

  },
  digitWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
    // backgroundColor: 'blue'
  },
  inputContainer: theme => ({
    // marginTop: 5,
    position: 'absolute',
    borderColor: theme.colors.grey3,
    borderWidth: 0,
    opacity: 0,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    // justifySelf: 'flex-end'
    // backgroundColor: 'yellow'
  }),
  input: theme => ({
    backgroundColor: 'red',
    opacity: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    flexGrow: 1
    // paddingHorizontal: 0,
  }),
})

DigitInput.defaultProps = {
  buttonTitle: 'Next'
}

DigitInput.propTypes = {
  howMuch: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default DigitInput
