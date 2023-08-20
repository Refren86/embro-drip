import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper as SwiperType } from "swiper";

import { CategoriesControls } from "./CategoriesControls";
import { CategoriesSwiper } from "./CategoriesSwiper";

function Categories() {
  const { t } = useTranslation();

  const [categorySwiper, setCategorySwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  console.log(categorySwiper);

  const handleSwipeProgress = useCallback((swiper: SwiperType) => {
    if (!swiper.isBeginning && !swiper.isEnd) {
      setIsBeginning(false);
      setIsEnd(false);
    }
  }, []);

  const handleReachBeginning = useCallback(() => {
    setIsEnd(false);
    setIsBeginning(true);
  }, []);

  const handleReachEnd = useCallback(() => {
    setIsBeginning(false);
    setIsEnd(true);
  }, []);

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">{t("categories.title")}</h2>

        <CategoriesControls
          categorySwiper={categorySwiper}
          isBeginning={isBeginning}
          isEnd={isEnd}
        />
      </div>

      <CategoriesSwiper
        categorySwiper={categorySwiper}
        setCategorySwiper={setCategorySwiper}
        onSwipeProgress={handleSwipeProgress}
        onReachBeginning={handleReachBeginning}
        onReachEnd={handleReachEnd}
      />
    </div>
  );
}

export { Categories };
