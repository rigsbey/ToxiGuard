declare module 'swiper' {
  import { SwiperOptions } from 'swiper/types';
  import { Swiper as SwiperClass } from 'swiper/types';
  export { Swiper, SwiperSlide } from 'swiper/react';
  export { Navigation, Pagination } from 'swiper/modules';
  export default SwiperClass;
  export { SwiperOptions };
} 