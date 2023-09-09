import { TCategory } from "../zod.schemas";

class CategoryDto {
  id;
  image;
  title;
  items;

  constructor(props: TCategory) {
    const { _id, image, title, items } = props;
    this.id = _id;
    this.image = image;
    this.title = title;
    this.items = items;
  }
}

export { CategoryDto };
