import { AntDesign as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import CalculateScreen from '../screens/Calculate'
import SettingsScreen from '../screens/Settings'
import TrackScreen from '../screens/Track'
import CalculateFinanceScreen from '../screens/CalculateFinance'
import ResultsScreen from '../screens/Results'
import TipsScreen from '../screens/Tips'
import { BottomTabParamList, CalculateParamList, SettingsParamList, TipsParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false }}
    >
      <BottomTab.Screen
        name="Calculate"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calculator" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Track"
        component={StatsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tips"
        component={TipsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Pledge"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="checkcircle" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={25} style={styles.tabBarIcon} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CalculateStack = createStackNavigator<CalculateParamList>()

function TabOneNavigator() {
  return (
    <CalculateStack.Navigator>
      <CalculateStack.Group
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      >
        <CalculateStack.Screen
          name="CalculateScreen"
          component={CalculateScreen}
          options={{
            headerTitle: 'Calculate',
          }}
        />
        <CalculateStack.Screen
          name="CalculateFinanceScreen"
          component={CalculateFinanceScreen}
          options={{
            headerBackTitle: 'Back',
            headerTitle: 'Calculate',
          }}
          />
        <CalculateStack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{
            headerBackTitle: 'Back',
            headerTitle: 'Calculate',
          }}
        />
      </CalculateStack.Group>
    </CalculateStack.Navigator>
  )
}

const TrackStack = createStackNavigator<TrackParamList>()

function StatsNavigator() {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen
        name="TrackScreen"
        component={TrackScreen}
        options={{
          headerTitle: 'Track',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </TrackStack.Navigator>
  )
}

const TipsStack = createStackNavigator<TipsParamList>()

function TipsNavigator() {
  return (
    <TipsStack.Navigator>
      <TipsStack.Screen
        name="TipsScreen"
        component={TipsScreen}
        options={{
          headerTitle: 'Tips',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </TipsStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <SettingsStack.Screen
        name="AboutScreen"
        component={AboutPage}
        options={{
          headerBackTestID: 'headerBack',
          headerTintColor: Colors.light.white,
          headerBackTitle: 'Back',
          headerTitle: 'About',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </SettingsStack.Navigator>
  )
}

// function CalculateFinanceNavigator() {
//   return (
//     <CalculateFinanceStack.Navigator>
//       <CalculateFinanceStack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//         options={{
//           headerTitle: 'Calculate',
//           headerStyle: styles.header,
//           headerTitleStyle: styles.headerTitle,
//         }}
//       />
      
//     </CalculateFinanceStack.Navigator>
//   )
// }

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    color: Colors.light.white,
    fontSize: 16,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
})
