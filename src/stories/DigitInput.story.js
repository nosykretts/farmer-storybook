import React from 'react'
import { storiesOf } from '@storybook/react-native'
import DigitInput from '../components/DigitInput'
import {Button} from 'react-native-elements'
import CenterView from '../components/CenterView'

storiesOf('Digit Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('4 Digit OTP', () => <DigitInput howMuch={4} label="Enter OTP Code" />)
  .add('6 Digit PIN', () => (
    <>
      <DigitInput howMuch={6} label="Enter Your PIN" />
      <DigitInput howMuch={6} label="Enter Your PIN Again" />
      <Button title="Next Bro" containerStyle={{
        width: '100%',
      }}
      buttonStyle={{
        marginHorizontal: 10
      }}
      />
    </>
  ))
  .add('With Button', () => (
    <>
      <DigitInput howMuch={4} label="Enter OTP code"  />
      <Button title="Next Bro"/>
    </>
  ))
  .add('With Button and Message', () => (
    <>
      <DigitInput
        howMuch={7}
        label="Enter OTP code"
        errorMessage="Error message"
      />
      <Button title="Hello" />
    </>
  ))
