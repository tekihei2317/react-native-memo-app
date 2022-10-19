import { createStackNavigator } from '@react-navigation/stack'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  Main: undefined
  Compose: undefined
}

export const Stack = createStackNavigator<RootStackParamList>()

export type ScreenNavigationProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>
