import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS} from '../constants';

export default function IndexScreen() {
  return (
    <View>
      <Text>IndexScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },
})