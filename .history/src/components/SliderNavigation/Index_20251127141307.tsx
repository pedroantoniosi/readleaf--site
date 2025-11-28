import React from "react";

interface ButtonProps {
  text: string;
  className?: string; // classes adicionais
}

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./index.module.css";

const SwiperNav = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.mySwiper}
      slidesPerView={4}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <SwiperSlide key={i} className={styles.swiperSlider}>
          Slide {i + 1}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperNav;
