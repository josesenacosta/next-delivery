import styles from './Banner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={styles.slide}><img src="../../tmp/Banner1.png" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.slide}><img src="../../tmp/Banner2.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner;
