import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { ScreenNavigationProp } from '../utils/navigation'

export const ComposeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp<'Compose'>>()
  const [text, setText] = useState('')

  const onPressSave = () => {
    navigation.navigate('Main')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        placeholder="メモを入力してください"
        multiline
        onChangeText={(text) => setText(text)}
      />
      <Button mode="contained" onPress={onPressSave}>
        保存
      </Button>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
