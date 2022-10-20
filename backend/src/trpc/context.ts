import { inferAsyncReturnType, initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { prisma } from '../utils/prisma'

export function createContext({}: trpcExpress.CreateExpressContextOptions) {
  return { prisma }
}

export type Context = inferAsyncReturnType<typeof createContext>
