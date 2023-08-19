import { Trans, useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { Layout } from "../../components/Layout";
import SlidePlaceholder from "../../assets/images/slider/slider-placeholder.webp";

function Home() {
  const { t } = useTranslation();

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

        <div className="mt-24">
          <h2 className="font-bold text-4xl">Категорії</h2>

          <p>
            <Trans i18nKey="description.part1">
              Edit <code>src/App.js</code> and save to reload.
            </Trans>
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("description.part2")}
          </a>
        </div>
      </div>
    </Layout>
  );
}

export { Home };
