import { z } from 'zod';
import { Types } from 'mongoose';

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

export const categorySchema = z.object({
  id: z.custom<Types.ObjectId>().optional(),
  title: z.string(),
  image: z.string(),
  items: z.array(z.custom<Types.ObjectId>()).optional(),
});

export type TUser = z.infer<typeof UserSchema>;
export type TUserDto = z.infer<typeof UserDtoSchema>;
