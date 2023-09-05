import { useTranslation } from "react-i18next";

import { Slide } from "@/types/common";
import { SlidesPerViewSwiperWrapper } from "@/components/SlidesPerViewSlider/SlidesPerViewSwiperWrapper";

import HoodiesImg from "../../assets/images/categories/hoodies.jpg";
import TShirtsImg from "../../assets/images/categories/t-shirts.jpg";
import HatsImg from "../../assets/images/categories/hats.jpg";
import MenImg from "../../assets/images/categories/men.jpg";
import WomanImg from "../../assets/images/categories/woman.jpg";

function NewProducts() {
  const { t } = useTranslation();

  const newProducts: Slide[] = [
    {
      image: HoodiesImg,
      id: "hoodies",
    },
    {
      image: TShirtsImg,
      id: "shirts",
    },
    {
      image: HatsImg,
      id: "hats",
    },
    {
      image: MenImg,
      id: "men",
    },
    {
      image: WomanImg,
      id: "women",
    },
  ];

  return (
    <SlidesPerViewSwiperWrapper slides={newProducts} title={t("newProducts")} />
  );
}

export { NewProducts };
