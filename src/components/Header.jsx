import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Header = () => {

  const [star, setstar] = useState(false)
  const [count, setClickCount] = useState(0)
  const [volume, setvolume] = useState(false)

  const handleClick = (value) => {
    let icon = document.querySelector('.nav-volume i')

    if (value == 0) {
      icon.style.color = '#FFD700';
      setClickCount(count + 1)
    }
    else if(value == 1) {
      setvolume(true);
      setClickCount(count + 1)
    }
    else if(value == 2) {
      icon.style.color = '#ccc';
      setClickCount(0)
    }
  }

  useEffect(() => {
    if (star || volume) {
      document.body.style.position = 'fixed';
      document.body.style.inset = '0';
    } else {
      document.body.style.position = 'relative';
      document.body.style.overflow = 'unset';
    }
  }, [star, volume]);




  return (
    <>
      <div className="siteheader-container">
        <div className="siteheader">
          <div className="logo">
            <Link to={'/'}>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                viewBox="0 0 243.09 76.48"
                style={{ enableBackground: 'new 0 0 243.09 76.48' }}
                xmlSpace="preserve"
                >
                <g>
                  <path
                    fill="currentColor"
                    d="M59.61,60.52c-0.82,1.42-1.76,2.52-2.84,3.31s-2.44,1.6-4.07,2.41l-1.8,0.94c-0.91,0.53-1.8,0.79-2.66,0.79
           c-0.62,0-1.25-0.11-1.87-0.32c-0.62-0.22-1.56-0.56-2.81-1.04l-1.58-0.65c-1.3-0.58-2.71-0.86-4.25-0.86
           c-0.86,0-1.69,0.08-2.48,0.25c-0.79,0.17-1.43,0.34-1.91,0.5c-0.48,0.17-0.79,0.28-0.94,0.32c0.86-1.2,1.82-2.64,2.88-4.32V40.46
           c-0.38-0.72-1.25-1.84-2.59-3.35c-1.34-1.51-2.3-2.46-2.88-2.84c0.05,0.91,0.07,1.72,0.07,2.41c0,0.7,0,1.16,0,1.4v17.57
           c0,1.87-0.31,3.34-0.94,4.39c-0.62,1.06-1.45,1.81-2.48,2.27c-1.03,0.46-2.44,0.9-4.21,1.33c1.39-1.2,2.09-5.54,2.09-13.03
           c0-2.64-0.07-5.21-0.22-7.7c-0.14-2.5-0.24-4.1-0.29-4.82c-0.53-0.1-1.32-0.14-2.38-0.14c-2.35,0-4.4,0.49-6.16,1.48
           c-1.75,0.98-3.08,2.24-4,3.78c-0.91,1.54-1.37,3.12-1.37,4.75c0,1.34,0.32,2.58,0.97,3.71c0.65,1.13,1.6,1.98,2.84,2.56
           c1.2,0.58,2.35,0.86,3.46,0.86c0.82,0,1.52-0.14,2.12-0.43c0.6-0.29,1.06-0.59,1.37-0.9c0.31-0.31,0.49-0.52,0.54-0.61
           c-0.24,0.67-0.85,1.24-1.84,1.69c-0.98,0.46-2.1,0.68-3.35,0.68c-1.2,0-2.36-0.25-3.49-0.76c-1.13-0.5-2.08-1.31-2.84-2.41
           c-1.39-2.02-2.09-4.54-2.09-7.56c0-2.26,0.42-4.39,1.26-6.41c0.84-2.02,2.05-3.58,3.64-4.68c1.1-0.67,2.57-1.12,4.39-1.33
           c1.82-0.22,4.13-0.3,6.91-0.25V19.22h-8.28c-1.58,0-2.84,0.55-3.78,1.66c-0.94,1.1-1.4,2.38-1.4,3.82c0,1.39,0.43,2.59,1.3,3.6
           c-1.01-0.33-1.81-1.14-2.41-2.41c-0.6-1.27-0.9-2.7-0.9-4.28c0-2.45,0.67-4.57,2.02-6.37c1.34-1.8,3.34-2.7,5.98-2.7
           c2.54,0,5-0.19,7.38-0.58c2.38-0.38,5.1-0.91,8.17-1.58c1.06-0.29,2.18-0.53,3.38-0.72V8.06h0.65v1.51h0.14l-0.14,0.07v21.31
           c0.24,0.67,0.91,1.51,2.02,2.52c1.1,1.01,1.99,1.7,2.66,2.09c-1.01,0.38-1.98,0.92-2.92,1.62c-0.94,0.7-1.52,1.79-1.76,3.28v20.3
           c1.68-2.69,3.12-5.39,4.32-8.1c1.2-2.71,1.8-4.93,1.8-6.66V17.35c0-1.49-1.01-2.23-3.02-2.23c-0.38,0-0.71,0.02-0.97,0.07
           c-0.26,0.05-0.44,0.07-0.54,0.07l12.96-7.92c-0.1,0.14-0.32,0.48-0.68,1.01c-0.36,0.53-0.7,1.27-1.01,2.23
           c-0.31,0.96-0.47,2.02-0.47,3.17v26.06c0,1.54,0.86,2.3,2.59,2.3c0.34,0,0.62-0.02,0.86-0.07c0.24-0.05,0.41-0.07,0.5-0.07
           l-3.96,4.39L37.58,59.69c1.39-1.06,2.86-1.58,4.39-1.58c0.91,0,1.84,0.16,2.77,0.47c0.94,0.31,2.17,0.83,3.71,1.55l3.02,1.3
           c1.15,0.43,2.16,0.65,3.02,0.65c1.68,0,2.98-0.6,3.89-1.8c0.91-1.2,1.37-2.64,1.37-4.32c0-1.25-0.25-2.14-0.76-2.66
           c-0.5-0.53-1.13-0.95-1.87-1.26c-0.74-0.31-1.21-0.56-1.4-0.76c-0.24-0.24-0.17-0.53,0.22-0.86c0.38-0.33,0.86-0.5,1.44-0.5
           c0.82,0,1.54,0.42,2.16,1.26c0.62,0.84,1.01,2.22,1.15,4.14C60.79,57.36,60.43,59.1,59.61,60.52z M35.28,30.67V9.86
           c-1.78,0.77-3.13,2.33-4.07,4.68c-0.94,2.35-1.4,5.02-1.4,7.99v9.5v2.23C31.68,34.27,33.5,33.07,35.28,30.67z"
                  />
                  <path
                    fill="currentColor"
                    d="M71.49,38.95v0.94l-2.59,1.44v12.74c0,0.86,0.64,1.63,1.91,2.3c1.27,0.67,2.53,1.01,3.78,1.01
           c0.86,0,1.49-0.19,1.87-0.58l2.74-3.02l-0.07-21.82c-1.44-0.05-4.07-0.1-7.88-0.14c-3.82-0.05-5.53-0.05-5.15,0
           c2.88,1.15,5.17,2.6,6.88,4.36c1.7,1.75,2.88,3.34,3.53,4.75c0.65,1.42,1.02,2.44,1.12,3.06v0.14c0,0.48-0.29,0.72-0.86,0.72
           c-0.19,0-0.37-0.06-0.54-0.18c-0.17-0.12-0.28-0.28-0.32-0.47c-0.34-2.35-1.34-4.5-3.02-6.44c-1.68-1.94-3.53-3.46-5.54-4.54
           s-3.6-1.6-4.75-1.55l7.49-8.06c0.05,0.1,0.12,0.34,0.22,0.72c0.1,0.38,0.37,0.73,0.83,1.04c0.46,0.31,1.14,0.47,2.05,0.47h9.29
           c0.62,0,1.33-0.14,2.12-0.43s1.48-0.6,2.05-0.94c0.58-0.33,0.94-0.55,1.08-0.65c-0.67,1.68-1.15,3.37-1.44,5.08
           c-0.29,1.7-0.43,3.13-0.43,4.28c0,1.15,0,1.9,0,2.23v14.26c0,2.11,0.34,3.82,1.01,5.11c0.67,1.3,1.46,2.09,2.38,2.38l1.58-1.8
           l0.58,0.5l-6.41,7.27c-1.73-1.34-3.02-2.74-3.89-4.18c-0.86-1.44-1.44-2.78-1.73-4.03l-7.2,8.21c0,0.1-0.91-0.12-2.74-0.65
           c-1.82-0.53-3.47-1.32-4.93-2.38c-1.46-1.06-2.2-2.45-2.2-4.18v-6.62c0-1.15-0.12-2.08-0.36-2.77c-0.24-0.69-0.5-1.21-0.79-1.55
           c-0.29-0.34-0.43-0.48-0.43-0.43L71.49,38.95z"
                  />
                  <path
                    fill="currentColor"
                    d="M115.05,55.8l-6.41,7.34c0,0.1-0.49-0.26-1.48-1.08c-0.98-0.82-1.86-1.9-2.63-3.24
           c-0.77-1.34-1.15-2.9-1.15-4.68V32.47c0-0.67-0.25-1.19-0.76-1.55c-0.5-0.36-1.12-0.54-1.84-0.54c-0.72,0-1.34,0.19-1.87,0.58
           c-0.53,0.38-0.79,0.89-0.79,1.51v24.12c0.62,0.53,1.32,0.89,2.09,1.08l-4.39,5.47c0,0.1-0.49-0.28-1.48-1.12
           c-0.98-0.84-1.86-1.93-2.63-3.28c-0.77-1.34-1.15-2.88-1.15-4.61V35.93c0-1.54-0.17-2.71-0.5-3.53c-0.34-0.82-0.71-1.37-1.12-1.66
           c-0.41-0.29-0.61-0.38-0.61-0.29l8.57-6.91v29.45c0,0.43,0.02,0.85,0.07,1.26c0.05,0.41,0.22,0.88,0.5,1.4V30.1
           c0-1.1,0.29-2.47,0.86-4.1c0.58-1.63,1.82-2.45,3.74-2.45h4.82c0.19,0,0.58-0.04,1.15-0.11s1.21-0.22,1.91-0.43
           c0.69-0.22,1.26-0.49,1.69-0.83c-0.1,0.14-0.31,0.46-0.65,0.94c-0.34,0.48-0.65,1.13-0.94,1.94c-0.29,0.82-0.43,1.66-0.43,2.52
           v25.42c0,0.82,0.16,1.74,0.47,2.77c0.31,1.03,1.09,1.64,2.34,1.84l2.02-2.3L115.05,55.8z"
                  />
                  <path
                    fill="currentColor"
                    d="M125.2,23.83l0.36-0.29h0.07h7.7c-0.24,0.34-0.78,1.13-1.62,2.38c-0.84,1.25-1.67,2.64-2.48,4.18
           c-0.82,1.54-1.27,2.81-1.37,3.82h-0.58c0-0.38,0.23-1.16,0.68-2.34c0.46-1.18,0.76-1.81,0.9-1.91h-6.41V48.6
           c0,2.69,1.19,4.75,3.56,6.19s4.52,2.38,6.44,2.81l2.02-2.3l0.58,0.5l-6.41,7.34c0,0.1-1.19-0.53-3.56-1.87
           c-2.38-1.34-4.52-2.9-6.44-4.68c-1.92-1.78-2.88-3.55-2.88-5.33v-12.6c0-1.3-0.19-2.34-0.58-3.13c-0.38-0.79-0.83-1.38-1.33-1.76
           c-0.5-0.38-0.76-0.53-0.76-0.43L125.2,23.83z"
                  />
                  <path
                    fill="currentColor"
                    d="M162.79,55.8l-6.41,7.34c-2.02-1.49-3.52-3.13-4.5-4.93c-0.98-1.8-1.48-3.4-1.48-4.79V29.74h-3.1
           c-0.62,0-1.14,0.22-1.55,0.65c-0.41,0.43-0.61,0.94-0.61,1.51v24.12c0.58,0.53,1.13,0.98,1.66,1.37c0.53,0.38,0.86,0.62,1.01,0.72
           l-4.03,5.04c-3.36-2.88-5.64-5.22-6.84-7.02c-1.2-1.8-1.8-3.54-1.8-5.22V21.38l0.07-1.3c0-0.43-0.06-0.74-0.18-0.94
           c-0.12-0.19-0.34-0.41-0.65-0.65c-0.31-0.24-0.54-0.43-0.68-0.58c1.44-0.67,3.31-1.85,5.62-3.53c2.3-1.68,4.39-3.42,6.26-5.22
           c1.87-1.8,2.98-3.25,3.31-4.36c0.05,0.77-0.25,1.69-0.9,2.77s-1.57,2.44-2.77,4.07c-1.1,1.44-1.94,2.65-2.52,3.64
           c-0.58,0.98-0.86,1.79-0.86,2.41v31.54c0,1.87,0.69,3.67,2.09,5.4V26.64c0-0.77,0.36-1.48,1.08-2.12c0.72-0.65,1.56-0.97,2.52-0.97
           h9c0.19,0,0.36,0.07,0.5,0.22c0.14,0.14,0.22,0.31,0.22,0.5v27.65c0,1.82,0.28,3.22,0.83,4.18c0.55,0.96,1.14,1.58,1.76,1.87
           l2.38-2.66L162.79,55.8z"
                  />
                  <path
                    fill="currentColor"
                    d="M163.79,59.4c0-2.66,1.8-4.54,4.32-4.54c2.52,0,4.25,1.87,4.25,4.54c0,2.59-1.66,4.54-4.32,4.54
           C165.52,63.94,163.79,61.99,163.79,59.4z"
                  />
                  <path
                    fill="currentColor"
                    d="M201.66,55.8l-6.41,7.34c0,0.1-0.49-0.26-1.48-1.08c-0.98-0.82-1.86-1.9-2.63-3.24
           c-0.77-1.34-1.15-2.9-1.15-4.68V32.47c0-0.67-0.25-1.19-0.76-1.55c-0.5-0.36-1.12-0.54-1.84-0.54c-0.72,0-1.34,0.19-1.87,0.58
           c-0.53,0.38-0.79,0.89-0.79,1.51v24.12c0.62,0.53,1.32,0.89,2.09,1.08l-4.39,5.47c0,0.1-0.49-0.28-1.48-1.12
           c-0.98-0.84-1.86-1.93-2.63-3.28c-0.77-1.34-1.15-2.88-1.15-4.61V35.93c0-1.54-0.17-2.71-0.5-3.53c-0.34-0.82-0.71-1.37-1.12-1.66
           c-0.41-0.29-0.61-0.38-0.61-0.29l8.57-6.91v29.45c0,0.43,0.02,0.85,0.07,1.26c0.05,0.41,0.22,0.88,0.5,1.4V30.1
           c0-1.1,0.29-2.47,0.86-4.1c0.58-1.63,1.82-2.45,3.74-2.45h4.82c0.19,0,0.58-0.04,1.15-0.11s1.21-0.22,1.91-0.43
           c0.69-0.22,1.26-0.49,1.69-0.83c-0.1,0.14-0.31,0.46-0.65,0.94c-0.34,0.48-0.65,1.13-0.94,1.94c-0.29,0.82-0.43,1.66-0.43,2.52
           v25.42c0,0.82,0.16,1.74,0.47,2.77c0.31,1.03,1.09,1.64,2.34,1.84l2.02-2.3L201.66,55.8z"
                  />
                  <path
                    fill="currentColor"
                    d="M210.81,24.41l7.27,8.86l-9.86,8.14v11.52l6.77,5.04l2.23-2.52l0.58,0.5l-6.41,7.34l-9.43-7.42V38.66
           c0-1.3-0.17-2.34-0.5-3.13c-0.34-0.79-0.71-1.38-1.12-1.76c-0.41-0.38-0.61-0.53-0.61-0.43L210.81,24.41z M212.9,36.29l-4.68-5.4
           v9.14L212.9,36.29z"
                  />
                  <path
                    fill="currentColor"
                    d="M220.6,23.62v-1.94c0-0.43-0.08-0.97-0.25-1.62c-0.17-0.65-0.59-1.19-1.26-1.62l7.78-5.18v10.22h5.4l-5.4,5.62
           v20.66c0,1.44,0.42,3.04,1.26,4.79c0.84,1.75,2.48,2.77,4.93,3.06l2.02-2.3l0.58,0.5l-6.41,7.34c0,0.19-0.8-0.22-2.41-1.22
           c-1.61-1.01-3.05-2.47-4.32-4.39c-1.27-1.92-1.91-4.32-1.91-7.2V29.09h-4.75L220.6,23.62z"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div id="nav-placeholder" className="nav-desktop">
            <nav className="main-nav main-nav-desktop">
                <Link to={'soapbox'} className="nav-link soapbox">
                    <div className="icon-container"><i className="fas fa-soap"></i><span className="icon-label">SOAPBOX</span></div>
                </Link>
                <Link className="nav-link live">
                    <div className="icon-container"><i className="fas fa-calendar-alt"></i><span className="icon-label">LIVE</span></div>
                </Link>
                <Link className="nav-link music">
                    <div className="icon-container"><i className="fas fa-compact-disc"></i><span className="icon-label">MUSIC</span></div>
                </Link>
                <Link className="nav-link learn">
                    <div className="icon-container"><i className="fas fa-graduation-cap"></i><span className="icon-label">LEARN</span></div>
                </Link>
            </nav>
          </div>
          <div className="nav-volume" data-darkbox-src="darkbox-star.html" onClick={() => handleClick(count)}>
            <Link>
              <i className="fas fa-volume-mute"></i>
            </Link>
          </div>
          <div className="darkbox-starbutton" data-darkbox-src="darkbox-star.html" onClick={() => setstar(true)}>
            <Link>
              <i className="fa-regular fa-star"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="darkbox-overlay" style={{ visibility: star && 'visible', opacity : star && '1' }}>
            <div className="darkbox-content">
                <div className="darkbox-close" id="closedarkbox">
                    <a href="#" onClick={() => setstar(false)}><i className="fa fa-window-close" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="swiper darkboxSwiper">
                <Swiper direction="horizontal" loop={false} speed={200} slidesPerView={1} centeredSlides={true} spaceBetween={10} allowTouchMove={true} navigation={{ prevEl: ".darkbox-navlink-prev", nextEl: ".darkbox-navlink-next" }} modules={[Navigation]} className="swiper-wrapper">
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


        <div className="darkbox-overlay" style={{ visibility: volume && 'visible', opacity : volume && '1' }}>
            <div className="darkbox-content">
                <div className="darkbox-close" id="closedarkbox">
                    <a href="#" onClick={() => setvolume(false)}><i className="fa fa-window-close" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="swiper darkboxSwiper">
                <div className="popup_full_container">
                  <div className="popup_container">
                    {/* <video controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                  </div>
                </div>
            </div>
        </div>

    </>
  );
};

export default Header;
