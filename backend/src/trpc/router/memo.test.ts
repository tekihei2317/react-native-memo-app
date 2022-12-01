import { prisma } from '../../utils/prisma'
import { appRouter, AppRouter } from './_app'

const caller = appRouter.createCaller({
  prisma: prisma,
})

describe('memoRouter', () => {
  test('ステータスを確認できること', async () => {
    const result = await caller.memo.health()

    expect(result).toStrictEqual({ status: 'Running' })
  })

  test('メモの一覧を取得できること', async () => {
    // const result = await caller.memo.getMemos()
    const result = []

    expect(result.length).toBe(1)
  })
})
