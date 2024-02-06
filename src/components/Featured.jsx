import React, { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  Thumbs,
  Controller,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/thumbs";

const Featured = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function updateStyles() {
      const element = document.querySelector(
        ".section-featured-image-perspective"
      );
      if (!element) return;

      let windowWidth = window.innerWidth;
      const minWidth = 360; // Minimum window width
      const maxWidth = 600; // Maximum window width

      // Ensure windowWidth is within the bounds
      windowWidth = Math.max(minWidth, Math.min(maxWidth, windowWidth));

      // Calculate the interpolation factor (0 at minWidth, 1 at maxWidth)
      const factor = (windowWidth - minWidth) / (maxWidth - minWidth);

      // Interpolate the right property from -60px to 0px
      const rightValue = -60 + factor * 60; // -60px at minWidth, 0px at maxWidth

      // Interpolate the opacity in the mask-image
      const opacityStart = 0 + factor; // 0% (transparent) at minWidth, 100% at maxWidth
      const opacityEnd = 70 + 30 * factor; // 70% at minWidth, 100% at maxWidth

      // Interpolate the overall opacity from 80% to 100%
      const overallOpacity = 0.8 + 0.2 * factor; // 80% at minWidth, 100% at maxWidth

      // Apply the interpolated styles
      element.style.right = rightValue + "px";
      element.style.maskImage = `linear-gradient(to right, transparent 0%, black ${opacityStart}%, black ${opacityEnd}%, transparent 100%)`;
      element.style.opacity = overallOpacity;
    }

    // Update styles on resize
    window.addEventListener("resize", updateStyles);
    // Initial update
    updateStyles();

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener("resize", updateStyles);
    };
  }, []);

  useEffect(() => {
    function updateOpacity() {
      const screenWidth = window.innerWidth;
      let newOpacity;

      if (screenWidth <= 1100) {
        newOpacity = 0;
      } else if (screenWidth > 1100 && screenWidth <= 1400) {
        newOpacity = (0.25 * (screenWidth - 1100)) / (1400 - 1100);
      } else {
        newOpacity = 0.25;
      }

      setOpacity(newOpacity);
    }

    // Update opacity on resize
    window.addEventListener("resize", updateOpacity);
    // Initial update
    updateOpacity();

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener("resize", updateOpacity);
    };
  }, []);

  return (
    <>
      <div className="section-container-featured">
        <div
          className="widescreen-gradient"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, ${opacity}), transparent 20%, transparent 80%, rgba(0, 0, 0, ${opacity}))`,
          }}
        ></div>
        <div className="carousel-container-edgefade">
          <div className="swiper featuredSwiper">
            <div className="feature-side-pic"></div>
            <div className="section-featured-backgroundswipe-container">
              <div className="section-featured-image-perspective">
                <div className="swiper featuredBackgroundSwiper">
                  <Swiper
                    className="swiper featuredBackgroundSwiper"
                    direction={"vertical"}
                    modules={[Autoplay, Controller]}
                    onSwiper={setControlledSwiper}
                  >
                    <SwiperSlide>
                      <div className="section-featured-image1">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="section-featured-image3">3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="section-featured-image2">2</div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="section-title-featured">FEATURED</div>
            <div className="swiper-button-prev featured-btn-prev">
              <div className="featured-button">
                <i className="fa fa-caret-left"></i>
              </div>
            </div>
            <div className="swiper-button-next featured-btn-next">
              <div className="featured-button">
                <i className="fa fa-caret-right"></i>
              </div>
            </div>

            <Swiper
              className="swiper featuredThumbsSwiper"
              modules={[Autoplay, Navigation, Pagination, Controller]}
              controller={{ control: controlledSwiper }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                prevEl: ".featured-btn-prev",
                nextEl: ".featured-btn-next",
              }}
              centeredSlides={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              speed={500}
              slidesPerView={1}
              spaceBetween={0}
              allowTouchMove={false}
            >
              <SwiperSlide>
                <div className="feature-card">
                  <div className="feature-card-content">
                    New single "Fluffy"!
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feature-card">
                  <div className="feature-card-content">
                    Old underwear giveaway!
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feature-card">
                  <div className="feature-card-content">The Lion King</div>
                </div>
              </SwiperSlide>
              <div className="section-footer-featured">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
