import { StackNavigationProp } from '@react-navigation/stack'
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native'
import { Button, Chip } from 'react-native-paper'
import Slider from '@react-native-community/slider';

import Screen from '../../components/Screen'
import { Text } from '../../components/Themed'
import { CalculateFianceParamList } from '../../types'

interface Props {
  navigation: StackNavigationProp<CalculateFianceParamList, 'CalculateFinanceScreen'>
}

export default function CalculateFinance({ navigation }: Props) {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [value3, setValue3] = useState<number>(0);
  const [value4, setValue4] = useState<number>(0);

  const clickHandler1 = (value: number) => {
    let finalValue = value * 100;
    setValue1(finalValue);
  }
  const clickHandler2 = (value: number) => {
    let finalValue = value * 90;
    setValue2(finalValue);
  }
  const clickHandler3 = (value: number) => {
    let finalValue = value * 100;
    setValue3(finalValue);
  }
  const clickHandler4 = (value: number) => {
    let finalValue = value * 80;
    setValue4(finalValue);
  }

  return (
    <Screen scroll>
      <Text style={styles.title}>How much do you spend on the below (AUD/year)?</Text>
      <Text variant="bodyMedium">Pharmaceuticals</Text>
      <Slider style={styles.slider} style={styles.slider} value={0} onValueChange={clickHandler1} minimumValue={0} maximumValue={5} step={1} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="rgb(70, 63, 176)" />
      <Chip style={styles.chip}>{value1} | Avg 100AUD / Month</Chip>
      <Text variant="bodyMedium">Clothes, textiles and shoes</Text>
      <Slider style={styles.slider} step={1} value={0} onValueChange={clickHandler2} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="rgb(70, 63, 176)" />
      <Chip style={styles.chip}>{value2} | Avg 90AUD Month</Chip>
      <Text variant="bodyMedium">Paper based products (e.g. books, magazines, newspapers)</Text>
      <Slider style={styles.slider} step={1} value={0} onValueChange={clickHandler3} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="rgb(70, 63, 176)" />
      <Chip style={styles.chip}>{value3} | Avg 100AUD Month</Chip>
      <Text variant="bodyMedium">Hotels, restaurants, and pubs etc.</Text>
      <Slider style={styles.slider} step={1} value={0} onValueChange={clickHandler4} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="rgb(70, 63, 176)" />
      <Chip style={styles.chip}>{value4} | Avg 80AUD Month</Chip>
      <Button mode="contained" onPress={() => navigation.navigate('ResultsScreen')}>
        Submit
      </Button>
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19
  },
  chip: {
    width: 340,
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
    height: 50,
    marginTop: 10,
    width: 370
  },
})
