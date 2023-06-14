import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import logoss from '../assets/test.png';

import 'swiper/swiper-bundle.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Testimonial() {
  const testimonialData = [
    {
      id: 0,
      value: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 1,
      value: 'https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      value: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      value: 'https://images.pexels.com/photos/4971237/pexels-photo-4971237.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      value: 'https://images.pexels.com/photos/4922970/pexels-photo-4922970.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      value: 'https://images.pexels.com/photos/16160815/pexels-photo-16160815/free-photo-of-a-young-teenager-smiling.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="testimonial-container">
      <div className="textimonial-heading-contianer">
        <img src={logoss} alt="" />
        <div className="testimonial-heading">
          <FontAwesomeIcon icon={faStar} />
          <h3>User Testimonial</h3>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className="carousel-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <img src={testimonial.value} alt="" className="testimonial-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="offer-contianer"></div>
      <div className="preview-page-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Testimonial;
