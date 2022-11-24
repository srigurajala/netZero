import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import { Card, Avatar } from 'react-native-paper'
import {
    LineChart,
    BarChart
  } from "react-native-chart-kit"
import Screen from '../../components/Screen'

import { Text, useThemeColor } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { ResultsParamList } from '../../types'
import { useAppSelector } from '../../hooks'
import { selectFavourites } from '../../redux/selectors'

interface Props {
  navigation: StackNavigationProp<ResultsParamList, 'ResultsScreen'>
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const chartConfig = {
  fillShadowGradientOpacity: 0.02,
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  strokeWidth: 2, 
};

export default function Results({ navigation }: Props) {
  const textColor = useThemeColor({}, 'text')

  return (
    <Screen scroll style={styles.container}>
        <Card style={styles.performanceCard}>
            <Card.Title  titleStyle={[styles.cardTitle, { color: textColor }]} title="Household tons CO2/year" />
            <Card.Content style={styles.cardContent}>
            <View style={styles.chartContainer}>
                <BarChart
                    data={{
                    labels: ['Travel', 'Personal', 'Food'],
                    datasets: [
                        {
                        data: [70, 49, 55],
                        },
                    ],
                    }}
                    width={Dimensions.get('window').width - 80}
                    height={220}
                    chartConfig={chartConfig}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
                </View>
            </Card.Content>
        </Card>
        <Card style={styles.performanceCard}>
            <Card.Title  titleStyle={[styles.cardTitle, { color: textColor }]} title="Overall Performance" />
            <Card.Content style={styles.cardContent}>
              <View style={styles.chartContainer}>
                <LineChart
                    data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                        data: [20, 45, 28, 80, 99, 43],
                        strokeWidth: 2,
                        },
                    ],
                    }}
                    width={Dimensions.get('window').width - 80}
                    height={220}
                    chartConfig={chartConfig}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
              </View>
            </Card.Content>
        </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    color: Colors.tintColor,
    width: "100%",
  },
  cardTitle: {
    fontSize: 16,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
  },
  chartContainer: {
    flex: 1, 
    paddingTop: 40,
    paddingBottom: 10,
    overflow: "visible",
  },
  performanceCard: {
    flex: 1,
    margin: 10,
    padding: 5,
    elevation: 4,
    borderRadius: 30,
  },
})