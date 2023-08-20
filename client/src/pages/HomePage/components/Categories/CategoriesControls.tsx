import { Swiper } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

type CategoriesControlsProps = {
  categorySwiper: Swiper | null;
  isBeginning: boolean;
  isEnd: boolean;
};

function CategoriesControls({
  categorySwiper,
  isBeginning,
  isEnd,
}: CategoriesControlsProps) {
  return (
    <div className="flex gap-x-3">
      <Button
        onClick={() => categorySwiper?.slidePrev()}
        disabled={isBeginning}
      >
        <ArrowLeft size={18} />
      </Button>
      <Button onClick={() => categorySwiper?.slideNext()} disabled={isEnd}>
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}

export { CategoriesControls };
