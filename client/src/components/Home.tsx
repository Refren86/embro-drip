import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import SlidePlaceholder from "../../public/images/slider/slider-placeholder.webp";

import { Layout } from "./Layout";

function Home() {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto px-4 pt-12 h-[200vh]">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            speed={800}
            className="home-slider"
          >
            <SwiperSlide>
              <img
                src={SlidePlaceholder}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SlidePlaceholder}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SlidePlaceholder}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SlidePlaceholder}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}

export { Home };
