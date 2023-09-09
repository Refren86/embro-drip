import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { client } from '@/lib/trpc';
import { TCategory } from '@/zod.schemas';
import { SlidesPerViewSwiperWrapper } from '@/components/SlidesPerViewSlider/SlidesPerViewSwiperWrapper';

function Categories() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    async function getCategories() {
      const categoriesData = await client.category.getCategories.query();

      if (categoriesData) {
        setCategories(categoriesData);
      }
    }

    getCategories();
  }, []);

  const translatedCategories = categories.map((category) => ({ ...category, title: t(category.title) }));

  return <SlidesPerViewSwiperWrapper slides={translatedCategories} title={t('categories.title')} buttonCenter />;
}

export { Categories };
