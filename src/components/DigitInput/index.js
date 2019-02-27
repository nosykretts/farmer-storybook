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

import Button from '../Button'
import DigitInputItem from './DigitInputItem'

class DigitInput extends React.Component {
  state = {
    digitString: ''
  }

  handleOnChangeText = text => {
    if (text.length <= this.props.howMuch) {
      this.setState({ digitString: text }, () => {
        if (text.length === this.props.howMuch) {
          Keyboard.dismiss()
        }
      })
    }
  }

  handleOnBlur = () => {
    console.log('on blur called')
    // Alert('23232')
    // Keyboard.dismiss()
  }

  render() {
    const { props, state } = this
    return (
      <ThemeConsumer>
        {({ theme }) => {
          // console.log(theme)
          return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.root}>
                {props.label && (
                  <Text style={styles.label(theme)}>{props.label}</Text>
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
                  <TextInput
                    style={styles.inputContainer}
                    keyboardType="number-pad"
                    selectTextOnFocus={false}
                    value={state.digitString}
                    onChangeText={this.handleOnChangeText}
                    onEndEditing={this.handleOnBlur}
                    onBlur={this.handleOnBlur}
                  />
                </View>
                <Text style={styles.errorMessage(theme)}>
                  {props.errorMessage}
                </Text>
                <Button
                  disabled={props.howMuch !== state.digitString.length}
                  title={props.buttonTitle}
                />
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
    // backgroundColor: 'pink',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 10
  },
  digitWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    // backgroundColor: 'blue'
  },
  inputContainer: {
    // backgroundColor: 'red',
    opacity: 0,
    // flex: 1,
    // flexGrow: 1,
    width: '100%',
    height: '100%',
    // paddingHorizontal: 0,
    position: 'absolute'
  },
  errorMessage: theme => {
    return {
      // margin: 5,
      marginVertical: 5,
      // fontSize: 12,
      color: theme.colors.error
    }
  },
  label: theme => ({
    fontSize: 16,
    marginBottom: 5,
    color: theme.colors.grey3,
    ...Platform.select({
      android: {
        // ...fonts.android.bold,
      },
      default: {
        fontWeight: 'bold'
      }
    })
  })
})

DigitInput.defaultProps = {
  buttonTitle: 'Next'
}

DigitInput.propTypes = {
  howMuch: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired
}

export default DigitInput
