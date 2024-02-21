'use client';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Work = () => {
  return (
    <>
      <div id="WORKS" className="mt-16 lg:px-6 ">
        <div className="max-w-[1000px] m-auto">
          <h3 className="text-4xl font-semibold ">WORKS</h3>
          <p className="text-xl mt-1 pb-16">
            보다 입체적인 솔루션과 디자인을 제안합니다
          </p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        className="sample-slider sample-slider"
        freeMode={true}
        resistance={true}
        resistanceRatio={0.85}
      >
        <SwiperSlide className="swiper-slide">
          <img src="/img/works2.png" alt="abraxas 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works1.png" alt="zenian 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works3.png" alt="법과사람들 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works5.png" alt="아브락삭스 끼브리자 디자인" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works8.png" alt="우리동네카센터 제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works7.png" alt="디블럭,우리동네카센터 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works6.png" alt="법무법인정곡 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works4.png" alt="디블럭필터 디자인" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Work;
