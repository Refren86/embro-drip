import { useCallback, useState } from "react";
import { Swiper as SwiperType } from "swiper";

import { Slide } from "@/types/common";
import { SlidesPerViewSwiper } from "./SlidesPerViewSwiper";
import { SlidesPerViewSwiperControls } from "./SlidesPerViewSwiperControls";

type SlidesPerViewSwiperWrapperProps = {
  title: string;
  slides: Slide[];
  buttonCenter?: boolean;
};

function SlidesPerViewSwiperWrapper({
  slides,
  title,
  buttonCenter
}: SlidesPerViewSwiperWrapperProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

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
        <h2 className="font-bold text-4xl">{title}</h2>

        <SlidesPerViewSwiperControls
          swiper={swiper}
          isBeginning={isBeginning}
          isEnd={isEnd}
        />
      </div>

      <SlidesPerViewSwiper
        swiper={swiper}
        slides={slides}
        buttonCenter={buttonCenter}
        setSwiper={setSwiper}
        onSwipeProgress={handleSwipeProgress}
        onReachBeginning={handleReachBeginning}
        onReachEnd={handleReachEnd}
      />
    </div>
  );
}

export { SlidesPerViewSwiperWrapper };
