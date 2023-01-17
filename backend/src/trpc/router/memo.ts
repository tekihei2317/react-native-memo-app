import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { getPaginatedData } from '../../utils/pagination'

const createMemoSchema = z.object({
  text: z.string().max(50),
})

const getMemosProcedure = publicProcedure.query(async ({ ctx }) => {
  return await ctx.prisma.memo.findMany()
})

const getPaginatedMemos = publicProcedure.query(async ({ ctx }) => {
  const paginated = await getPaginatedData(ctx.prisma, 'memo', {
    page: 1,
    perPage: 20,
    orderBy: { createdAt: 'desc' },
  })

  return { items: paginated.items, count: paginated.count, pageCount: paginated.pageCount }
})

const createMemoProcedure = publicProcedure.input(createMemoSchema).mutation(async ({ ctx, input }) => {
  const memo = await ctx.prisma.memo.create({
    data: input,
  })

  return memo
})

export const memoRouter = router({
  getMemos: getMemosProcedure,
  getPaginatedMemos,
  createMemo: createMemoProcedure,
})
