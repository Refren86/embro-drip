import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";

import { createCtx } from "./context";

export const t = initTRPC
  .context<inferAsyncReturnType<typeof createCtx>>()
  .create();

// middleware procedure which checks if user is an admin
const isAuthMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx }); // this will override context
});

export const authUserProcedureMiddleware = t.procedure.use(isAuthMiddleware);
