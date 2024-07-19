import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Pagination,
} from "swiper/modules";

const MainSwiper = () => {
  return (
    <div className="slide_wrap banner">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide className="swiper_slide">
          <div className="slide_image_box">
            <div className="slide_text_box">
              {/* <div className="banner_logo_box">
                <div className="banner_logo"></div>
              </div>
              <div className="banner_text">
                <p>“서해안 시대를 준비하는 산학융합의 중심.</p>
                <p className="banner_txt_sub1">기술인력의 양성,</p>
                <p className="banner_txt_sub2">충남산학융합원”</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
