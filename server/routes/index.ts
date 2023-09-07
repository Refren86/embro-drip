import { authUserProcedureMiddleware, t } from '../trpc';
import { authRouter } from './auth';

export const appRouter = t.router({
  auth: authRouter,
  somethingProtected: authUserProcedureMiddleware.query(({ ctx }) => {
    console.log('Context >', ctx);
    return 'Ok';
  }),
});
