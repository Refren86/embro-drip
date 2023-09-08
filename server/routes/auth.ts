import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { authUserProcedureMiddleware, t } from '../trpc';
import { UserDto } from '../dto/user.dto';
import UserModel from '../models/user.model';
import { UserDtoSchema, UserSchema } from '../zod.schemas';
import { comparePasswords, generateToken, hashPassword } from '../helpers/security';

export const authRouter = t.router({
  createUser: t.procedure
    .input(UserSchema)
    .output(UserDtoSchema)
    .mutation(async (req) => {
      const userData = structuredClone(req.input);
      userData.password = await hashPassword(userData.password);
      const createdUser = await UserModel.create({ ...userData, role: 'customer' });

      const accessToken = generateToken({ email: createdUser.email, role: createdUser.role });
      const userWithToken = { ...new UserDto(createdUser), accessToken };

      return userWithToken;
    }),
  login: t.procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .output(UserDtoSchema)
    .mutation(async (req) => {
      const body = req.input;
      console.log('User ?', req.ctx.user);

      const existingUser = await UserModel.findOne({ email: body.email });

      if (!existingUser) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User was not found',
        });
      }

      const isPasswordCorrect = await comparePasswords(existingUser.password, body.password);

      if (!isPasswordCorrect) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email or password is not correct',
        });
      }

      const accessToken = generateToken({ email: existingUser.email, role: existingUser.role });

      return { ...new UserDto(existingUser), accessToken };
    }),
  getUser: authUserProcedureMiddleware.query(async ({ ctx }) => {
    const tokenData = ctx.user;

    if (tokenData) {
      const userData = await UserModel.findOne({ email: tokenData.email });

      if (userData) {
        return new UserDto(userData);
      }
    }

    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }),
});
