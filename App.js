import React from 'react'
import { ThemeProvider, colors } from 'react-native-elements'
import { StyleSheet, Platform } from 'react-native'
import StorybookUI from './storybook'

const theme = {
  Button: {
    containerStyle: {
      marginHorizontal: 10
    },
    titleStyle: {
      textTransform: 'uppercase'
    }
  },
  Input: {
    containerStyle: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 10
    },
    labelStyle: {
      fontSize: 14,
      marginBottom: 5,
      color: colors.grey3,
      ...Platform.select({
        default: {
          fontWeight: 'normal'
        }
      })
    },
    inputContainerStyle: {
      flexDirection: 'row',
      borderRadius: 3,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignItems: 'center',
      borderColor: colors.grey3
    },
    inputStyle: {
      alignSelf: 'center',
      color: colors.grey0,
      fontSize: 18,
      flex: 1,
      minHeight: 40,
      paddingHorizontal: 10
    },
    errorStyle: {
      margin: 5,
      marginHorizontal: 0,
      fontSize: 14,
      color: colors.error,
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StorybookUI />
      </ThemeProvider>
    )
  }
}
