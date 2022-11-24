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

  return (
    <Screen scroll>
      <Text style={styles.title}>How much do you spend on the below (AUD/year)?</Text>
      <Text variant="bodyMedium">Pharmaceuticals</Text>
      <Slider style={styles.slider} 
        value={0} onValueChange={setValue1} 
        minimumValue={0} maximumValue={5} 
        step={1}
        minimumTrackTintColor="#FFFFFF" 
        maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value1}X</Chip>
      <Text variant="bodyMedium">Clothes, textiles and shoes</Text>
      <Slider step={1} value={0} onValueChange={setValue2} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value2}X</Chip>
      <Text variant="bodyMedium">Paper based products (e.g. books, magazines, newspapers)</Text>
      <Slider step={1} value={0} onValueChange={setValue3} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value3}X</Chip>
      <Text variant="bodyMedium">Hotels, restaurants, and pubs etc.</Text>
      <Slider step={1} value={0} onValueChange={setValue4} minimumValue={0} maximumValue={5} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
      <Chip style={styles.chip} onPress={() => console.log('Pressed')}>{value4}X</Chip>
      {/* <Text style={styles.title}>How much do you spend on the below (AUD/Year) ?</Text> */}
      {/* <Text variant="bodyMedium">Pharmaceuticals</Text>
      <Slider value={0} onValueChange={setValue} minimumValue={0} maximumValue={} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" /> */}
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
    width: 100,
    backgroundColor: 'lightblue',
    textAlign: 'center'
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
  }
})
