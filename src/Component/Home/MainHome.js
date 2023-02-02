import { useNavigate } from "react-router-dom";
import { MainHomeData, ItemText } from "../../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function MainHome() {
  const navigate = useNavigate();

  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-full pb-24">
      <div className="container px-5 mt-10 mx-auto">
        <div className="flex flex-wrap -m-4">
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
          {MainHomeData &&
            MainHomeData.map((el, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => navigate(`${el.CATEGORY}/${el.ID}`)}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full mb-40 cursor-pointer"
                >
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={el.IMG}
                  />

                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {el.CATEGORY}
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      {el.NAME}
                    </h2>
                    <p className="mt-1">₩{el.PRICE}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default MainHome;
