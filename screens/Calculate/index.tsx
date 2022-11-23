import { StackNavigationProp } from '@react-navigation/stack'
import React, {useState} from 'react';
import { StyleSheet, FlatList, View } from 'react-native'
import { Chip, Paragraph, Button } from 'react-native-paper'
import Slider from '@react-native-community/slider';

import Screen from '../../components/Screen'
import { Text, useThemeColor } from '../../components/Themed'
import { CalculateParamList } from '../../types'
import Colors from '../../constants/Colors'

interface Props {
  navigation: StackNavigationProp<CalculateParamList, 'CalculateScreen'>
}

export default function Calculate({ navigation }: Props) {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [value3, setValue3] = useState<number>(0);
  const [value4, setValue4] = useState<number>(0);

  const clickHandler1 = (value: number) => {
    let finalValue = value * 576;
    setValue1(finalValue);
  }
  const clickHandler2 = (value: number) => {
    let finalValue = value * 671;
    setValue2(finalValue);
  }
  const clickHandler3 = (value: number) => {
    let finalValue = value * 286;
    setValue3(finalValue);
  }
  const clickHandler4 = (value: number) => {
    let finalValue = value * 271;
    setValue4(finalValue);
  }
  return (
    <Screen scroll>
      <Text style={styles.title}>How much do you consume? (in calories)? </Text>
      <Paragraph>Meat, fish, eggs</Paragraph>
      <Slider style={styles.slider} value={0} onValueChange={clickHandler1} minimumValue={0} maximumValue={5} step={1} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value1} Daily calories per person</Chip>
      <Paragraph>Diary</Paragraph>
      <Slider style={styles.slider} step={1} value={0} onValueChange={clickHandler2} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value2} Daily calories per person</Chip>
      <Paragraph>Grains/Cereals</Paragraph>
      <Slider style={styles.slider} step={1} value={0} onValueChange={clickHandler3} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value3} Daily calories per person</Chip>
      <Paragraph>Fruits/Vegetables</Paragraph>
      <Slider style={styles.slider} step={1} value={0} onValueChange={clickHandler4} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value4} Daily calories per person</Chip>
      <Button mode="contained" onPress={() => navigation.navigate('CalculateFinanceScreen')}>
        Next
      </Button>
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
    textAlign: 'center',
  },
  chip: {
    width: 220,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 0,
  },
  slider: {
    opacity: 1,
    width: 400,
    height: 50,
    marginTop: 10,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    padding: 50
  }
})
