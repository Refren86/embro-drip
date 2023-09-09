import { z } from 'zod';

import { t } from '../trpc';
import { CategoryDto } from '../dto/category.dto';
import CategoryModel from '../models/category.model';
import { CategoryDtoSchema, CategorySchema } from '../zod.schemas';

// TODO: make private
export const categoryRouter = t.router({
  getCategories: t.procedure.output(z.array(CategoryDtoSchema)).query(async () => {
    const categories = await CategoryModel.find();

    const categoriesDto = categories.map((category) => {
      const { _id, title, image, items } = category;
      return new CategoryDto({ _id, title, image, items });
    });

    return categoriesDto;
  }),
  createCategory: t.procedure.input(CategorySchema).mutation(async (req) => {
    const body = req.input;

    const category = await CategoryModel.create(body);
    return category;
  }),
});
