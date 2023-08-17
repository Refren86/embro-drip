import { adminProcedureMiddleware, t } from "../trpc";
import { userRouter } from "./users";

export const appRouter = t.router({
  sayHi: t.procedure.query(() => "Hi"),
  logToServer: t.procedure
    .input((val) => {
      // validation of input
      if (typeof val === "string") return val;

      throw new Error("Invalid input: Expected string");
    })
    .mutation((req) => {
      console.log("Client says: ", req.input);
      return true;
    }),
  users: userRouter,
  secretData: adminProcedureMiddleware.query(({ ctx }) => {
    console.log(ctx.user);
    return "Super top secret admin data";
  }),
});
