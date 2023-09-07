import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, memo } from "react";
import { Swiper as SwiperType } from "swiper";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Slide } from "@/types/common";

type SlidesPerViewSwiperProps = {
  swiper: SwiperType | null;
  slides: Slide[];
  buttonCenter?: boolean;
  setSwiper: Dispatch<SetStateAction<SwiperType | null>>;
  onSwipeProgress: (swiper: SwiperType) => void;
  onReachBeginning: () => void;
  onReachEnd: () => void;
};

const SlidesPerViewSwiper = memo(
  ({
    swiper,
    slides,
    buttonCenter,
    setSwiper,
    onSwipeProgress,
    onReachBeginning,
    onReachEnd,
  }: SlidesPerViewSwiperProps) => {
    const { t } = useTranslation();

    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Controller]}
        onSwiper={setSwiper}
        controller={swiper ? { control: swiper } : undefined}
        onReachBeginning={onReachBeginning}
        onReachEnd={onReachEnd}
        onProgress={onSwipeProgress}
        className="mt-12 h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="group overflow-hidden">
            <Link to={`/categories/${slide.id}`} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
              />

              {buttonCenter && (
                <button className="absolute w-[200px] -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
                  <h3 className="text-3xl font-bold mb-4 text-secondary">
                    {slide.title}
                  </h3>

                  <p className="text-lg text-secondary font-semibold">
                    {t("categories.seeAll")}
                  </p>
                </button>
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);

export { SlidesPerViewSwiper };
