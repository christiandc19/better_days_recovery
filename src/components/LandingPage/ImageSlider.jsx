import React, { useRef, useEffect, useState } from 'react';
import './ImageSlider.css';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Drug_Addiction from '../../assets/program_options_alcoholism.webp';
import Cocaine from '../../assets/cocaine_hero.webp';
import Fentanyl from '../../assets/fentanyl_hero.webp';
import Meth from '../../assets/meth_hero.webp';
import Cannabis from '../../assets/cannabis_hero.webp';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first image (second in the extended array)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { src: Drug_Addiction, header: 'Alcohol Addiction', link: "/alcoholism" },
    { src: Cocaine, header: 'Cocaine', link: "/cocaine-addiction-treatment" },
    { src: Fentanyl, header: 'Fentanyl', link: "/fentanyl-addiction-treatment" },
    { src: Meth, header: 'Meth', link: "/meth-addiction-treatment" },
    { src: Cannabis, header: 'Cannabis', link: "/cannabis-addiction-treatment" },
  ];

  // Create an extended array for seamless looping
  const imagesExtended = [
    images[images.length - 1], // Clone last image
    ...images,
    images[0], // Clone first image
  ];

  // This function handles the scrolling logic
  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const imageWidth = slider.offsetWidth / (window.innerWidth <= 768 ? 1 : 3); // Show 1 on mobile, 3 on desktop

    slider.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth',
    });

    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleScrollLeft = () => {
    if (isTransitioning) return;

    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length; // Jump to last actual image
    }
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScrollRight = () => {
    if (isTransitioning) return;

    let newIndex = currentIndex + 1;
    if (newIndex >= images.length + 1) {
      newIndex = 1; // Jump to first actual image
    }
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Automatically scroll to the first actual image when mounted
    scrollToIndex(currentIndex);

    const handleInfiniteScroll = () => {
      const imageWidth = slider.offsetWidth / (window.innerWidth <= 768 ? 1 : 3);
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth - imageWidth * 2; // Set scroll to last image position
        setCurrentIndex(images.length); // Update index to last image
      } else if (slider.scrollLeft >= slider.scrollWidth - imageWidth) {
        slider.scrollLeft = imageWidth; // Set scroll to first image position
        setCurrentIndex(1); // Update index to first image
      }
    };

    slider.addEventListener('scroll', handleInfiniteScroll);

    return () => {
      slider.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [currentIndex]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="slider-container">
      <Fade left duration={2000}>
      
      <h1>What We Treat</h1>
      </Fade>
      <button
        className="arrow left-arrow"
        onClick={handleScrollLeft}
        disabled={isTransitioning}
      >
        &lt;
      </button>

      <div className="slider container" ref={sliderRef}>
        {imagesExtended.map((image, index) => (
          <div key={index} className="slider-item">
            <Link to={image.link} onClick={handleLinkClick}>
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </Link>
            <div className="slider-header">{image.header}</div>
          </div>
          
        ))}

      </div>

      <button
        className="arrow right-arrow"
        onClick={handleScrollRight}
        disabled={isTransitioning}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
