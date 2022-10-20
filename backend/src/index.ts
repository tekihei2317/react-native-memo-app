import * as trpcExpress from '@trpc/server/adapters/express'
import express from 'express'
import { appRouter } from './trpc/router/_app'

const app = express()

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
)

const port = 4000
app.listen(port, () => {
  console.log(`server is listening at port ${port}.`)
})
