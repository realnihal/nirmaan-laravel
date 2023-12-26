
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "./carouselSecondPage.css";

import cImg1 from "../../images/cimg1.png";
import cImg2 from "../../images/cimg2.png";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function CarouselSecondPage() {
  const [swiperdDirection, setSwiperDirection] = useState(window.innerWidth < 1200 ? 'horizontal' : 'vertical');
  const [isVertical, setIsVertical] = useState();

  let swiperRef = null;
  console.log('swiperdDirection', swiperdDirection)

  const handleSwiper = (swiper) => {
    swiperRef = swiper; // Assign the swiper instance to the swiperRef variable
    // Now that swiperRef is assigned, you can access its properties safely
    setSlidesOffset(swiper);
  };

  // const setSlidesOffset = (swiper) => {
  //   if (swiper) {
  //     const slideWidth = swiper.slides[0].offsetWidth; // Get the width of the first slide
  //     const offset = slideWidth / 2; // Calculate the offset (50% of slide width)
  //     swiper.params.slidesOffsetBefore = -offset; // Set the offset
  //     swiper.update(); // Update Swiper to reflect the changes
  //   }
  // };

  const setSlidesOffset = (swiper) => {
    if (swiper) {
      const isHorizontal = swiper.params.direction === 'horizontal';

      const slideDimension = isHorizontal
        ? swiper.slides[0].offsetWidth // Get the width of the first slide
        : swiper.slides[0].offsetHeight; // Get the height of the first slide

      const offset = slideDimension / 2; // Calculate the offset (50% of slide width or height)
      console.log('isHorizontal', isHorizontal, 'slideDimension', slideDimension, 'offset', offset)
      if (isHorizontal) {
        swiper.params.slidesOffsetBefore = -offset; // Set horizontal offset
        swiper.params.slidesOffsetAfter = offset; // Set horizontal offset after
      } else {
        swiper.params.slidesOffsetTop = -offset; // Set vertical offset
        swiper.params.slidesOffsetBottom = offset; // Set vertical offset bottom
      }

      swiper.update(); // Update Swiper to reflect the changes
    }
  };

  return (

    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      navigation={true}

      // loop={true}
      // direction={''}
      direction={swiperdDirection}
      // direction={isVertical ? 'vertical' : 'horizontal'}
      onSwiper={handleSwiper}
      onSlideChange={() => console.log('slide change')}
      className="vertical-carousel-container"
    >

      <SwiperSlide>
        <div className="vertical-carousel__img-box">
          <img src={cImg1} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="vertical-carousel__img-box">
          <img src={cImg1} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="vertical-carousel__img-box">
          <img src={cImg1} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="vertical-carousel__img-box">
          <img src={cImg1} />
        </div>
      </SwiperSlide>

    </Swiper>

  );
}

export default CarouselSecondPage;
