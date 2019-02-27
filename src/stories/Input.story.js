import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../components/CenterView'
import Input from '../components/Input'
storiesOf('Input', module)
  .addDecorator(getStory => (
    <CenterView style={{ backgroundColor: 'grey' }}>{getStory()}</CenterView>
  ))
  .add('Text Input', () => (
    <>
      <Input label="Input Label" />
      <Input label="Input Label" errorMessage="Error Message" />
    </>
  ))
