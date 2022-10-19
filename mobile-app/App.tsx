import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { MainScreen } from './screens/MainScreen'
import { ComposeScreen } from './screens/ComposeScreen'
import { Stack } from './utils/navigation'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} options={{ title: 'メモ帳' }} />
          <Stack.Screen name="Compose" component={ComposeScreen} options={{ title: '作成' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
