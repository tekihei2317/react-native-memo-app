import { StyleSheet, Text, View, FlatList } from 'react-native'
import { List } from 'react-native-paper'
import format from 'date-fns/format'

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

const memos: Memo[] = [
  {
    text: 'メモ',
    createdAt: new Date('2022-01-01'),
  },
  {
    text: 'メモメモ',
    createdAt: new Date('2022-01-02'),
  },
  {
    text: 'メモメモメモメモメモメモメモメモメモメモメモメモメモメモ',
    createdAt: new Date('2022-01-03'),
  },
  {
    text: 'メモメモメモ',
    createdAt: new Date('2022-01-04'),
  },
  {
    text: 'メモメモメモメモメモ',
    createdAt: new Date('2022-01-05'),
  },
]

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
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        keyExtractor={(item) => `${item.createdAt.getTime()}`}
        renderItem={({ item }) => <MemoItem memo={item} />}
      />
    </View>
  )
}
