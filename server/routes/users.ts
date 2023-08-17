import { t } from "../trpc";
import { z } from "zod";

// validation of input
const userProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const userRouter = t.router({
  get: userProcedure.query(({ input }) => {
    return { id: input.userId };
  }),
  update: userProcedure
    .input(z.object({ name: z.string() }))
    .output(z.object({ name: z.string(), id: z.string() })) // return value
    .mutation((req) => {
      console.log('Is admin ?', req.ctx.isAdmin);
      
      console.log(
        `Updating user ${req.input.userId} to have a name ${req.input.name}`
      );

      return {
        id: req.input.userId,
        name: req.input.name,
      };
    }),
});
