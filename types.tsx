/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type NO_PARAMS = undefined
export type RootStackParamList = {
  Root: NO_PARAMS
  NotFound: NO_PARAMS
}

export type MainStackParamList = {
  Main: NO_PARAMS
  CompletedScreen: NO_PARAMS
}

export type BottomTabParamList = {
  Calculate: NO_PARAMS
  Stats: NO_PARAMS
  Settings: NO_PARAMS
  Tips: NO_PARAMS
}

export type CalculateParamList = {
  CalculateScreen: NO_PARAMS
  PlayScreen: {
    id: string
  }
}
export type CalculateFinanceParamList = {
  CalculateFinanceScreen: NO_PARAMS
}

export type ResultsParamList = {
  ResultsScreen: NO_PARAMS
}

export type StatsParamList = {
  StatsScreen: NO_PARAMS
}

export type SettingsParamList = {
  SettingsScreen: NO_PARAMS
  AboutScreen: NO_PARAMS
}

export type TipsParamList = {
  TipsScreen: NO_PARAMS
}
