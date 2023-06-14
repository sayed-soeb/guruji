import React, { useState } from 'react';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      image:require('../assets/Ellipse 1628.png'),
      name: 'Harsh Patel',
      review: 'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with'
    },
    {
      id: 2,
      image: require('../assets/Ellipse 1630.png'),
      name: 'Milind Rana',
      review: 'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with'
    },
    {
      id: 3,
      image: require('../assets/Ellipse 1631.png'),
      name: 'Robert Patel',
      review: 'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with'
    },
    {
      id: 4,
      image: require('../assets/Ellipse 1632.png'),
      name: 'Anjali Begum',
      review: 'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with'
    },
    {
      id: 5,
      image: require('../assets/Ellipse 1634.png'),
      name: 'Jingoli Khan',
      review: 'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with'
    },

    // Add more reviews here
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="review">
    <div className="container">
      <div className='review-con'></div>
      <div className="carousel">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          ><div className='rev'>
            <p>{review.review}</p>
            </div>
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={goToPrevSlide}>&#8249;</button>
      <button className="next-btn" onClick={goToNextSlide}>&#8250;</button>
    </div>
    </div>
    <div class="card-region"></div>
    </>
  );
};

export default Review;
