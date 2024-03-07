// Service.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import chairs from '../assets/chairs.jpg';
import living from '../assets/living-room.jpg';

import styles from '../styles/Service.module.css'; // Import your CSS module

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [chairs, living, living, living, chairs, chairs]; // Add more images as needed

  useEffect(() => {
    const interval = setInterval(() => {
      
      setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3));
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='' style={{background: "#EADED7"}}>
      <div className="section-center p-4">
        <article className="row justify-content-between px-4 pt-4">
          <h3 className='col-6 text-capitalize'>
            custom furniture <br /> built only for you
          </h3>
          <p className='col-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit
            non aliquam voluptates dolore aut vero consequuntur.
          </p>
        </article>
        <div className="services-center">
          <div id="carouselExampleSlidesOnly" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
            <div className={`carousel-inner ${styles.carouselInner}`}>
              {Array.from({ length: Math.ceil(images.length / 3) }).map((_, setIndex) => (
                <div key={setIndex} className={`carousel-item ${setIndex === activeIndex ? 'active' : ''} ${styles.carouselItem}`}>
                  <div className={`d-flex ${styles.imageSet}`}>
                    {images.slice(setIndex * 3, setIndex * 3 + 3).map((image, index) => (
                      <div key={index} className={`w-100 ${styles.imageWrapper}`}>
                        <Image src={image} className="d-block w-100 p-3" alt={`Image ${setIndex * 3 + index + 1}`} width={350} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
