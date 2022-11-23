import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import Screen from '../../components/Screen'


import { Text } from '../../components/Themed'
import { TipsParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<TipsParamList, 'TipsScreen'>
}

export default function Tips() {
  return (
    <Screen scroll>
      <Text>Tips</Text>
    </Screen>
  )
}