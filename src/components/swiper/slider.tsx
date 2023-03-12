import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './swiper.scss';
import { ISlider } from '../../interfaces/interfaces';

export const Slider: React.FC<ISlider> = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const GalleryElements = gallery.map((image) => (
    <SwiperSlide>
      <img
        src={`https://strapi.cleverland.by${image.url}`}
        alt='nature'
        className='big-image'
        data-test-id='slide-mini'
      />
    </SwiperSlide>
  ));

  const ThumbsElements = gallery.map((image) => (
    <SwiperSlide>
      <img
        src={`https://strapi.cleverland.by${image.url}`}
        alt='nature'
        className='thumb-image'
        data-test-id='slide-mini'
      />
    </SwiperSlide>
  ));

  return (
    <div className={styles.swipContainer}>
      <Swiper
        data-test-id='slide-big'
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#363636',
        // }}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='mySwiper2'
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        {GalleryElements}
      </Swiper>
      <div className='swiper-pagination' />
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        watchSlidesProgress={true}
        // watchSlidesVisibility={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {ThumbsElements}
      </Swiper>
    </div>
  );
};
