import { z } from 'zod';

import { translationData } from './lib/i18n';

export const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  role: z.string().optional(),
  password: z.string(),
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

export const loginSchema = () => {
  return z.object({
    email: z.string().email({ message: translationData.emailError }),
    password: z.string().min(6, translationData.passwordError),
  });
};

export type TLoginData = z.infer<ReturnType<typeof loginSchema>>;

export const signUpSchema = () => {
  return z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string().email({ message: translationData.emailError }),
    password: z.string().min(6, translationData.passwordError),
  });
};

export type TSignUpData = z.infer<ReturnType<typeof signUpSchema>>;

export const categorySchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  image: z.string(),
  items: z.array(z.string()).optional(),
});

export type TCategory = z.infer<typeof categorySchema>
