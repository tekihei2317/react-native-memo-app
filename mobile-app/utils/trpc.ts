import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '../../backend/src/trpc/router/_app'
import superjson from 'superjson'

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: 'http://192.168.1.6:4000/trpc',
    }),
  ],
})
