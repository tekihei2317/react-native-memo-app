import { z } from 'zod'
import { router, publicProcedure } from '../trpc'

const createMemoSchema = z.object({
  text: z.string().max(50),
})

const getMemosProcedure = publicProcedure.query(async ({ ctx }) => {
  return await ctx.prisma.memo.findMany()
})

const createMemoProcedure = publicProcedure.input(createMemoSchema).mutation(async ({ ctx, input }) => {
  const memo = await ctx.prisma.memo.create({
    data: input,
  })

  return memo
})

export const memoRouter = router({
  getMemos: getMemosProcedure,
  createMemo: createMemoProcedure,
})
