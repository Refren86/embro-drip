import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { verifyToken } from './helpers/security';

export async function createCtx({ req, res }: CreateExpressContextOptions) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const user = verifyToken(req.headers.authorization.split(' ')[1]);
      return user;
    }

    return null;
  }

  const user = await getUserFromHeader();

  return {
    user,
  };
}
