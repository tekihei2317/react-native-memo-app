import { appRouter, AppRouter } from './_app'
import { inferProcedureInput } from '@trpc/server'

const prisma = jestPrisma.client
const caller = appRouter.createCaller({
  prisma,
})

describe('memoRouter', () => {
  test('メモの一覧を取得できること', async () => {
    const memo = await prisma.memo.create({
      data: {
        text: 'Hello, world!',
      },
    })
    const result = await caller.memo.getMemos()

    expect(result).toEqual([memo]) // toStrictEqualだとパスしなかった
  })

  test('メモを登録できること', async () => {
    const memo: inferProcedureInput<AppRouter['memo']['createMemo']> = {
      text: 'メモ',
    }
    await caller.memo.createMemo(memo)

    const memos = await prisma.memo.findMany()
    expect(memos.length).toBe(1)
    // assertDatabaseHasとかを作りたい
    expect(memos).toContainEqual(expect.objectContaining(memo))
  })
})
