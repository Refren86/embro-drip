import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export function createCtx({ req, res }: CreateExpressContextOptions) {
  return {
    req,
    res,
    isAdmin: true
  }
}