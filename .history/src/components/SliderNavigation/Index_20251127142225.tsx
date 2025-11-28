import React from "react";

interface swiperProps {
  sliderNumber: number;
  children: React.ReactNode;
}

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Estilos obrigatórios
import "swiper/css";
import "swiper/css/navigation";

import styles from "./index.module.css";

const SwiperNav = ({ sliderNumber, children }: swiperProps) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.mySwiper}
      slidesPerView={sliderNumber}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <SwiperSlide key={i} className={styles.swiperSlider}>
          {children}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperNav;
