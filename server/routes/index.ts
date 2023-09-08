import { z } from 'zod';

import { t } from '../trpc';
import { authRouter } from './auth';
import { categorySchema } from '../zod.schemas';
import CategoryModel from '../models/category.model';

export const appRouter = t.router({
  auth: authRouter,
  getCategories: t.procedure.output(z.array(categorySchema)).query(async () => {
    const categories = await CategoryModel.find();

    const cleanCategories = categories.map((category) => {
      const { _id, title, image, items } = category;
      return { id: _id, title, image, items };
    });

    return cleanCategories;
  }),
  createCategory: t.procedure.input(categorySchema).mutation(async (req) => {
    const body = req.input;

    const category = await CategoryModel.create(body);
    return category;
  }),
});
