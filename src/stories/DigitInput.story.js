import React from 'react'
import { storiesOf } from '@storybook/react-native'
import DigitInput from '../components/DigitInput'
import Button from '../components/Button'
import CenterView from '../components/CenterView'

storiesOf('Digit Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('4 Digit OTP', () => <DigitInput howMuch={4} label="Enter OTP Code" />)
  .add('6 Digit PIN', () => <DigitInput howMuch={6} label="Enter Your PIN" />)
  .add('With Button', () => (
    <React.Fragment>
      <DigitInput howMuch={4} label="Enter OTP code" buttonTitle="Next Bro" />
    </React.Fragment>
  ))
  .add('With Button and Message', () => (
    <React.Fragment>
      <DigitInput
        howMuch={7}
        label="Enter OTP code"
        errorMessage="Error message"
      />
    </React.Fragment>
  ))
