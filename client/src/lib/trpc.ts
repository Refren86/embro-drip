import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouter } from '../../../server/api';

const accessToken = localStorage.getItem('accessToken');

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/trpc',
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    }),
  ],
});
