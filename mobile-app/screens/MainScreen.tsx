import { StyleSheet, View, FlatList } from 'react-native'
import { List, FAB } from 'react-native-paper'
import format from 'date-fns/format'
import { useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../utils/navigation'
import { trpc } from '../utils/trpc'
import { useEffect, useState } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
})

type Memo = {
  text: string
  createdAt: Date
}

const MemoItem = ({ memo }: { memo: Memo }) => {
  return (
    <List.Item
      title={memo.text}
      description={format(memo.createdAt, 'yyyy.MM.dd HH:mm')}
      titleNumberOfLines={5}
      descriptionStyle={{ textAlign: 'right' }}
    />
  )
}

export const MainScreen = () => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation<ScreenNavigationProp<'Main'>>()

  useEffect(() => {
    const fetchData = async () => {
      const memos = await trpc.memo.getMemos.query()
      setMemos(memos)
    }
    const unsubscribe = navigation.addListener('focus', fetchData)

    return unsubscribe
  }, [navigation])

  const onPressAdd = () => {
    navigation.navigate('Compose')
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => <MemoItem memo={item} />}
      />
      <FAB style={{ position: 'absolute', right: 16, bottom: 16 }} icon="plus" onPress={onPressAdd} />
    </View>
  )
}
