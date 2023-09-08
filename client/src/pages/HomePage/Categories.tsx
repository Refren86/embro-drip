import { useTranslation } from 'react-i18next';

// import { Slide } from '@/types/common';
import { SlidesPerViewSwiperWrapper } from '@/components/SlidesPerViewSlider/SlidesPerViewSwiperWrapper';

// import HoodiesImg from '../../assets/images/categories/hoodies.jpg';
// import TShirtsImg from '../../assets/images/categories/t-shirts.jpg';
// import HatsImg from '../../assets/images/categories/hats.jpg';
// import MenImg from '../../assets/images/categories/men.jpg';
// import WomanImg from '../../assets/images/categories/woman.jpg';
import { useEffect, useState } from 'react';
import { client } from '@/lib/trpc';
import { TCategory } from '@/zod.schemas';

function Categories() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    async function getCategories() {
      const categoriesData = await client.getCategories.query();

      if (categoriesData) {
        setCategories(categoriesData.map((category) => ({ ...category, title: t(category.title) })));
      }
    }

    getCategories();
  }, []);

  console.log("categories >>>", categories);
  

  // const categories: Slide[] = [
  //   {
  //     image: HoodiesImg,
  //     title: t('categories.hoodies'),
  //     id: 'hoodies',
  //   },
  //   {
  //     image: TShirtsImg,
  //     title: t('categories.tshirts'),
  //     id: 'shirts',
  //   },
  //   {
  //     image: HatsImg,
  //     title: t('categories.caps'),
  //     id: 'hats',
  //   },
  //   {
  //     image: MenImg,
  //     title: t('categories.men'),
  //     id: 'men',
  //   },
  //   {
  //     image: WomanImg,
  //     title: t('categories.women'),
  //     id: 'women',
  //   },
  // ];

  return <SlidesPerViewSwiperWrapper slides={categories} title={t('categories.title')} buttonCenter />;
}

export { Categories };
