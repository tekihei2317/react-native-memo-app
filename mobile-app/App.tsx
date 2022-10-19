import { StyleSheet, Text, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ここはメイン画面です</Text>
    </View>
  )
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} options={{ title: 'メモ帳' }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
