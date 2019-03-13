import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../components/CenterView'
import {Input} from 'react-native-elements'
storiesOf('Input', module)
  .addDecorator(getStory => (
    <CenterView style={{ backgroundColor: 'white' }}>{getStory()}</CenterView>
  ))
  .add('Text Input', () => (
    <>
      <Input label="Input Label" />
      <Input label="Input Label" errorMessage="Error Message" />
    </>
  ))
