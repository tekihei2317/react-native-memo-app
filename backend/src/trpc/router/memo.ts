import { z } from 'zod'
import { router, publicProcedure } from '../trpc'

const createMemoSchema = z.object({
  text: z.string().max(50),
})

type CreateMemoSchema = z.infer<typeof createMemoSchema>

const createMemoProcedure = publicProcedure.input(createMemoSchema).mutation(({ ctx, input }) => {
  console.log(input)
})

export const memoRouter = router({
  createMemo: createMemoProcedure,
})
