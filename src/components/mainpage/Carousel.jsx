import { useEffect, useState } from 'react';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = ['/img/slide1.jpg', '/img/slide2.jpg', '/img/slide3.jpg', '/img/slide4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carousel">
      <div id="images">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide ${index + 1}`}
            style={{ display: index === current ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
