import * as trpcExpress from '@trpc/server/adapters/express'
import express from 'express'
import { appRouter } from './trpc/router/_app'
import { createContext } from './trpc/context'

const app = express()

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

const port = 4000
app.listen(port, () => {
  console.log(`server is listening at port ${port}.`)
})
