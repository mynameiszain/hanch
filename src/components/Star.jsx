import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation, Autoplay, Controller } from 'swiper/modules';

const Star = ({star, setstar}) => {

    const handleCloseClickStar = () => {
        setstar(false);
    }

    const darkboxSwiperConfig = {
        direction: 'horizontal',
        loop: false,
        speed: 200,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        allowTouchMove: true,
        navigation: {
          nextEl: '.darkbox-navlink-next',
          prevEl: '.darkbox-navlink-prev',
        },
    };

  return (
    <>
        <div className="darkbox-overlay">
            <div className="darkbox-content">
                <div className="darkbox-close" id="closedarkbox">
                    <a href="#" onClick={handleCloseClickStar}><i className="fa fa-window-close" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="swiper darkboxSwiper">
                <Swiper {...darkboxSwiperConfig} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className="alert">
                            <div className="alert-window-blue">
                                <div className="alert-star-icon"><i className="fa-solid fa-star"></i></div>
                                <span className="alert-star-title">Straight from the tap</span>
                                <p><span className="full-width">I'll be honest. I'm not really trying to pay social media companies
                                        or rely on the whim of their algorithms just to reach my own audience. If you like what
                                        I do, hop aboard the Hanch Express! Here's your ticket:</span></p>
                            </div>
                        </div>
                        <div className="darkbox-section">
                            <div className="darkbox-section-container">
                                <div className="darkbox-section-title">GET NOTIFIED<i className="fa-solid fa-bell"></i></div>
                                <div className="darkbox-section-subtitle">Never miss a beat on Hanch.net</div>
                                <button id="levelup-button">LEVEL UP</button>
                                <div className="darkbox-divider"></div>
                                <div className="darkbox-section-title">JOIN THE CLUB<i className="fa-solid fa-key"></i></div>
                                <div className="darkbox-section-subtitle">News, exclusive offers, and deep secrets</div>
                                <div className="signup-form">
                                    <input type="text" placeholder="your@email.address" id="email-input" />
                                    <button id="signup-button">SIGN UP</button>
                                </div>

                            </div>
                        </div>
                        <div className="darkbox-section">
                            <div className="darkbox-navlink-next">
                                <a href="#" className="darkbox-link">
                                    <div className="darkbox-navlink">SUPPORT THE CAUSE <i className="fa-solid fa-caret-right"></i></div>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="alert">
                            <div className="alert-window-green">
                                <div className="alert-globe-icon"><i className="fa-solid fa-earth-americas"></i></div>
                                <span className="alert-globe-title">Support the cause</span>
                                <p><span className="full-width">Advocating for the planet is good and well, but if you're looking to
                                        truly make a difference, you may want to consider supporting me and my endeavors:</span>
                                </p>
                            </div>
                        </div>
                        <div className="darkbox-section">
                            <div className="darkbox-section-container">
                                <div className="darkbox-section-title">SPREAD THE LOVE</div>
                                <div className="darkbox-section-subtitle">It's easy and free! Show me off to your friends</div>
                                <div className="darkbox-share">
                                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="#" aria-label="Email"><i className="fa fa-envelope"></i>
                                    </a>
                                </div>
                                <div className="darkbox-divider"></div>
                                <div className="darkbox-section-title">DRIP TIL YOU DROP</div>
                                <div className="darkbox-section-subtitle">Your body is a temple, so <a
                                        href="https://store.hanch.net/">adorn it properly</a></div>
                                <div className="darkbox-divider"></div>
                                <div className="darkbox-section-title">TIP JAR</div>
                                <div className="darkbox-section-subtitle">Money is the root of all evil, so <a href="#">cleanse
                                        yourself</a></div>
                            </div>
                        </div>
                        <div className="darkbox-section">
                            <div className="darkbox-navlink-prev">
                                <a href="#" className="darkbox-link">
                                    <div className="darkbox-navlink"><i className="fa-solid fa-caret-left"></i> STRAIGHT FROM THE TAP
                                    </div>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>


    
    </>
  )
}

export default Star