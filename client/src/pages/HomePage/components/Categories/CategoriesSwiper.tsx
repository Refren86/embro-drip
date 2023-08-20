import { Dispatch, SetStateAction, memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HoodiesImg from "../../../../assets/images/categories/hoodies.jpg";
import TShirtsImg from "../../../../assets/images/categories/t-shirts.jpg";
import HatsImg from "../../../../assets/images/categories/hats.jpg";
import MenImg from "../../../../assets/images/categories/men.jpg";
import WomanImg from "../../../../assets/images/categories/woman.jpg";

type CategoriesSwiperProps = {
  categorySwiper: SwiperType | null;
  setCategorySwiper: Dispatch<SetStateAction<SwiperType | null>>;
  onSwipeProgress: (swiper: SwiperType) => void;
  onReachBeginning: () => void;
  onReachEnd: () => void;
};

const CategoriesSwiper = memo(
  ({
    categorySwiper,
    setCategorySwiper,
    onSwipeProgress,
    onReachBeginning,
    onReachEnd,
  }: CategoriesSwiperProps) => {
    const { t } = useTranslation();

    console.log("Rendered !!!");

    const categories = [
      {
        image: HoodiesImg,
        title: t("categories.hoodies"),
        endpoint: "hoodies",
      },
      {
        image: TShirtsImg,
        title: t("categories.tshirts"),
        endpoint: "shirts",
      },
      {
        image: HatsImg,
        title: t("categories.caps"),
        endpoint: "hats",
      },
      {
        image: MenImg,
        title: t("categories.men"),
        endpoint: "men",
      },
      {
        image: WomanImg,
        title: t("categories.women"),
        endpoint: "women",
      },
    ];

    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Controller]}
        onSwiper={setCategorySwiper}
        controller={categorySwiper ? { control: categorySwiper } : undefined}
        onReachBeginning={onReachBeginning}
        onReachEnd={onReachEnd}
        onProgress={onSwipeProgress}
        className="mt-12 h-[500px]"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.title} className="group overflow-hidden">
            <Link to={`/categories/${category.endpoint}`} className="relative">
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute w-[200px] -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
                <h3 className="text-3xl font-bold mb-4 text-secondary">
                  {category.title}
                </h3>

                <p className="text-lg text-secondary font-semibold">
                  {t("categories.seeAll")}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);

export { CategoriesSwiper };
