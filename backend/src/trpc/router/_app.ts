import { router } from '../trpc'
import { memoRouter } from './memo'

export const appRouter = router({
  memo: memoRouter,
})

export type AppRouter = typeof appRouter
