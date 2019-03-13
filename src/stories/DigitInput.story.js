import React from 'react'
// import { Input } from 'react-native-elements'
import { storiesOf } from '@storybook/react-native'
import { Formik } from 'formik'
import { Alert, Keyboard } from 'react-native'
import { CenterView, DigitInput, DigitInputSimple, Input } from '../components'
import { Button } from 'react-native-elements'
import * as Yup from 'yup'

storiesOf('Digit Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('4 Digit OTP', () => (
    <>
      <DigitInput howMuch={4} label="Enter OTP Code" />
    </>
  ))
  .add('6 Digit PIN', () => (
    <>
      <DigitInput howMuch={6} label="Enter Your PIN" errorMessage="wewe" />
      <DigitInput howMuch={6} label="Enter Your PIN Again" />
      <Button
        title="Next Bro"
        containerStyle={{
          alignSelf: 'stretch'
        }}
      />
    </>
  ))
  .add('Simple Button and Input', () => (
    <>
      <DigitInputSimple
        howMuch={6}
        label="Enter New PIN"
        errorMessage="Error message"
      />
      <DigitInputSimple
        howMuch={6}
        label="Confirm New PIN"
        errorMessage="*the Speficied PIN doesdsd"
      />
      <Input
        label="Input Label"
        defaultValue="Default value"
        errorMessage="Error message"
      />
      <Button
        title="SUBMIT"
        containerStyle={{
          alignSelf: 'stretch'
        }}
      />
    </>
  ))
  .add('With Button and Input', () => (
    <>
      <DigitInput
        howMuch={4}
        label="Enter OTP code"
        errorMessage="Error message"
      />
      <Input
        label="Input Label"
        defaultValue="Default value"
        errorMessage="Error message"
        // onFocus={() => Alert.alert('c')}
      />
      <Button
        title="Next X"
        containerStyle={{
          alignSelf: 'stretch'
        }}
      />
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
  .add('formik x', () => {
    const SignupSchema = Yup.object().shape({
      pin: Yup.string()
        .min(6)
        .max(6)
        .label('PIN')
        .required(),
      rePin: Yup.string()
      
      .oneOf([Yup.ref('pin')], 'PINs do not match')
      .label('Confirm PIN')
      .required(),
      oi: Yup.string().required(),
    })

    return (
      <Formik
        validationSchema={SignupSchema}
        // validateOnChange={false}
        initialValue={{
          pin: '',
          rePin: '',
          oi: 'w'
        }}
        onSubmit={values => {
          Alert.alert(JSON.stringify(values, null, 2))
          Keyboard.dismiss()
        }}
      >
        {({ errors, touched, isValid, ...props }) => (
          <>
            <DigitInputSimple
              howMuch={6}
              label="Enter New PIN"
              errorMessage={errors.pin && touched.pin && errors.pin}
              onChangeText={props.handleChange('pin')}
              onBlur={props.handleBlur('pin')}
              value={props.values.pin}
            />
            <DigitInputSimple
              howMuch={6}
              label="Confirm New PIN"
              errorMessage={errors.rePin && touched.rePin && errors.rePin}
              onChangeText={props.handleChange('rePin')}
              onBlur={props.handleBlur('rePin')}
              value={props.values.rePin}
            />
            <Input
              label="Input Label"
              errorMessage={errors.oi && touched.oi && errors.oi}
              value={props.values.oi}
              onBlur={props.handleBlur('oi')}
              onChangeText={props.handleChange('oi')}
              // onFocus={() => Alert.alert('c')}
            />
            <Button
              disabled={!isValid}
              title="Hello"
              onPress={props.handleSubmit}
              title="SUBMIT"
              containerStyle={{
                alignSelf: 'stretch'
              }}
            />
          </>
        )}
      </Formik>
    )
  })
