import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

export const UserDtoSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  role: z.string().optional(),
  accessToken: z.string().optional(),
});

export type TUser = z.infer<typeof UserSchema>;
export type TUserDto = z.infer<typeof UserDtoSchema>;

