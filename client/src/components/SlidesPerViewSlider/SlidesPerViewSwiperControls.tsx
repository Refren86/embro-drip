import { Swiper } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

type SlidesPerViewSwiperProps = {
  swiper: Swiper | null;
  isBeginning: boolean;
  isEnd: boolean;
};

function SlidesPerViewSwiperControls({
  swiper,
  isBeginning,
  isEnd,
}: SlidesPerViewSwiperProps) {
  return (
    <div className="flex gap-x-3">
      <Button
        onClick={() => swiper?.slidePrev()}
        disabled={isBeginning}
      >
        <ArrowLeft size={18} />
      </Button>
      <Button onClick={() => swiper?.slideNext()} disabled={isEnd}>
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}

export { SlidesPerViewSwiperControls };
