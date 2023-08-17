import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createCtx } from "./context";

export const t = initTRPC
  .context<inferAsyncReturnType<typeof createCtx>>()
  .create();

// middleware procedure which checks if user is an admin
const isAdminMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.isAdmin) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { user: { id: 1 } } }); // this will also override context
  // return next(); // this will also override context
});

export const adminProcedureMiddleware = t.procedure.use(isAdminMiddleware);
