import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  {
    id: 1,
    url:
      "https://media.gettyimages.com/id/879751676/photo/some-coffee-for-a-late-night-shift.jpg?s=612x612&w=0&k=20&c=3fGMo-LXTWkOzuwNZCAwJCsJ37w9JA2hD-KUxd_s97A=",
    alt: "Image 1",
    caption: "Reach out to our variety of tutors and your fellow students versed in a wide range of subjects. They are all willing to use their experience from the same classes you are struggling with to help you through your rough patch and understand any material you are struggling with.",
  },
  {
    id: 2,
    url:
      "https://assets.atlasobscura.com/article_images/33976/image.jpg",
    alt: "Image 2",
    caption: "Each of our tutors are rated by the students they have tutored with a bio, and their areas of expertise listed as well. No need to stress about not knowing who to ask for help- Sign up now and choose from one of our many tutors based on subject, availability, and ratings.",
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button className="carousel__button" onClick={handlePrevClick}>
        Prev
      </button>
      <img
        className="carousel__image"
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
      />
      <div className="carousel__caption">{images[currentIndex].caption}</div>
      
    </div>
  );
};

export default Carousel;
