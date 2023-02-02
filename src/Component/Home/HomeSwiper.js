import { ItemText } from "../../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function HomeSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="mb-4"
    >
      {ItemText.map((el, key) => {
        return (
          <SwiperSlide key={key}>
            <div className="flex justify-center p-24">
              <span className="text-xl text">{el.CONTENT}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HomeSwiper;
