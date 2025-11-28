import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Estilos obrigatórios
import "swiper/css";
import "swiper/css/navigation";

import styles from "./index.module.css";

const SwiperNav = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.mySwiper}
      slidesPerView={3}
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
