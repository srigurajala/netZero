import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, FlatList, Dimensions } from 'react-native'
import { Card, Paragraph, Avatar, Title, Button } from 'react-native-paper'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
  } from "react-native-chart-kit"
import Screen from '../../components/Screen'

import DownloadButton from '../../components/DownloadButton'

import { Text, useThemeColor } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { meditations, MeditationItem } from '../../data/meditations'
import { ResultsParamList } from '../../types'
import { useAppSelector } from '../../hooks'
import { selectFavourites } from '../../redux/selectors'

interface Props {
  navigation: StackNavigationProp<ResultsParamList, 'ResultsScreen'>
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function Results({ navigation }: Props) {
  const textColor = useThemeColor({}, 'text')
  const screenWidth = Dimensions.get("window").width;

  const favourites = useAppSelector(selectFavourites)

  return (
    <Screen scroll>
        <Card style={styles.card}>
            <Card.Title  titleStyle={[styles.cardTitle, { color: textColor }]} title="Household tons CO2/year" />
            <Card.Content style={styles.cardContent}>
                <BarChart
                    data={{
                    labels: ['Travel', 'Home', 'Food'],
                    datasets: [
                        {
                        data: [70, 49, 55],
                        },
                    ],
                    }}
                    width={320}
                    height={220}
                    chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
            </Card.Content>
        </Card>
        <Card style={styles.card}>
            <Card.Title  titleStyle={[styles.cardTitle, { color: textColor }]} title="Overall Performance" />
            <Card.Content style={styles.cardContent}>
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
                    width={320}
                    height={220}
                    chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    }}
                />
            </Card.Content>
        </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 370,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
  },
  cardImage: {
    height: 135,
  },
  popularImage: {
    height: 250,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardSubtitle: {
    color: Colors.light.gray800,
    fontSize: 14,
  },
  cardParagraph: {
    color: Colors.light.purple900,
    fontWeight: '600',
  },
  downloadButton: {
    position: 'relative',
    top: -6,
  },
  cards: {
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
  },
})
