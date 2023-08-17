import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import { AppRouter } from "../../../server/api";

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:5000/trpc",
      headers: {
        "Authorization": "Token"
      }
    }),
  ],
});