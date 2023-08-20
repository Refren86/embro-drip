import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import HoodiesImg from "../../../assets/images/categories/hoodies.jpg";
import TShirtsImg from "../../../assets/images/categories/t-shirts.jpg";
import HatsImg from "../../../assets/images/categories/hats.jpg";
import MenImg from "../../../assets/images/categories/men.jpg";
import WomanImg from "../../../assets/images/categories/woman.jpg";

function Categories() {
  const { t } = useTranslation();

  return (
    <div className="mt-24">
      <h2 className="font-bold text-4xl">{t("categories.title")}</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mt-12 h-[500px]"
      >
        <SwiperSlide className="group overflow-hidden relative">
          <img
            src={HoodiesImg}
            loading="lazy"
            className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute w-[200px] -translate-y-1/2 top-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-secondary">{t("categories.hoodies")}</h3>

            <p className="text-lg text-secondary font-semibold">{t("categories.seeAll")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden relative">
          <img
            src={TShirtsImg}
            loading="lazy"
            className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute w-[200px] -translate-y-1/2 top-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-secondary">{t("categories.tshirts")}</h3>

            <p className="text-lg text-secondary font-semibold">{t("categories.seeAll")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden relative">
          <img
            src={HatsImg}
            loading="lazy"
            className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute w-[200px] -translate-y-1/2 top-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-secondary">{t("categories.caps")}</h3>

            <p className="text-lg text-secondary font-semibold">{t("categories.seeAll")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden relative">
          <img
            src={MenImg}
            loading="lazy"
            className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute w-[200px] -translate-y-1/2 top-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-secondary">{t("categories.men")}</h3>

            <p className="text-lg text-secondary font-semibold">{t("categories.seeAll")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="group overflow-hidden relative">
          <img
            src={WomanImg}
            loading="lazy"
            className="object-cover hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute w-[200px] -translate-y-1/2 top-1/2 bg-foreground/20 px-10 py-6 text-center rounded-lg border border-secondary group-hover:bg-foreground/50 hover:cursor-pointer">
            <h3 className="text-3xl font-bold mb-4 text-secondary">{t("categories.women")}</h3>

            <p className="text-lg text-secondary font-semibold">{t("categories.seeAll")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export { Categories };
