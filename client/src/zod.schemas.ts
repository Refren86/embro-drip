import { z } from 'zod';

import { translationData } from './lib/i18n';

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
  accessToken: z.string().optional(),
  role: z.string().optional(),
});

export type TUser = z.infer<typeof UserSchema>;
export type TUserDto = z.infer<typeof UserDtoSchema>;

export const loginSchema = () => {
  return z.object({
    email: z.string().email({ message: translationData.emailError }),
    password: z.string().min(6, translationData.passwordError),
  });
};

export type TLoginData = z.infer<ReturnType<typeof loginSchema>>;

export type signUpData = {
  email: string;
  password: string;
};
