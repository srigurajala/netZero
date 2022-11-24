import * as React from 'react'
import { Alert } from 'react-native'
import { List, MD3Colors } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/meditationSlice'
import { openURL } from '../../utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { SettingsParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'SettingsScreen'>
}

const Settings = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()

  const openPrivacyPolicy = () => {
    try {
      openURL('https://www.anz.com/netZero/privacy')
    } catch (error) {
      console.error(error)
    }
  }
  const clearData = () => {
    Alert.alert(
      'Clear Data',
      'Are you sure you want to delete your data? All your stats will be reset. This cannot be undone.',
      [
        {
          text: 'Clear Data',
          onPress: () => dispatch(reset()),
          style: 'destructive',
        },
        {
          text: 'Cancel',
        },
      ]
    )
  }
  return (
    <>
      <List.Section>
      <List.Subheader>My Pledges</List.Subheader>
      <List.Item title="Carry a reusable bag while I step out" left={() => <List.Icon icon="check" />} />
      <List.Item
        title="Carry my own reusable cup for coffee/tea in restaurants"
        left={() => <List.Icon  icon="check" />}
      />
      <List.Item
        title="Make conscious effort in buying organic fibres (clothing/accessories)"
        left={() => <List.Icon  icon="check" />}
      />
      
    </List.Section>
    </>
  )
}

export default Settings
