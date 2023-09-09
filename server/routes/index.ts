import { t } from '../trpc';
import { authRouter } from './auth';
import { categoryRouter } from './category';

export const appRouter = t.router({
  auth: authRouter,
  category: categoryRouter,
});
