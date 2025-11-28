import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import styles from "./index.module.css";

// import required modules
import { Navigation } from "swiper/modules";

const swiperNav = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlider}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiperSlider}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default swiperNav;
