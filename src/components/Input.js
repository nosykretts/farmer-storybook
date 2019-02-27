import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Input} from 'react-native-elements'


const CustomInput = props => (
  <Input {...props} />
)


const styles = StyleSheet.create({
  root: {
    backgroundColor: 'yellow'
  }
})

export default CustomInput