import React from 'react'
import { ThemeProvider } from 'react-native-elements'

import StorybookUI from './storybook'


const theme = {
  Button: {
    raised: false,
    titleStyle: {
      // textTransform: 'uppercase',
    }
  },
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
