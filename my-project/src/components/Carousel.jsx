import React, { useRef } from 'react';
import uno from "../assets/images/imagenes-15.png"
import dos from "../assets/images/imagenes-16.png"
import tres from "../assets/images/imagenes-17.png"
import cuatro from "../assets/images/imagenes-18.png"
import cinco from "../assets/images/imagenes-19.png"
import seis from "../assets/images/imagenes-20.png"
import siete from "../assets/images/imagenes-21.png"
import ocho from "../assets/images/imagenes-22.png"
import nueve from "../assets/images/imagenes-23.png"

const Gallery = () => {
  const slidesContainerRef = useRef(null);
  const slideWidth = slidesContainerRef.current?.querySelector('.slide').clientWidth;

  const handleNextClick = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft += slideWidth;
    }
  };

  const handlePrevClick = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft -= slideWidth;
    }
  };

  return (
    <div
      id="app"
      className="max-w-screen-xxl mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear"
    >
      <h3 className="font-cabinetGrotesk text-3xl lg:text-4xl font-bold mb-12 text-center text-[--brown]">
        GALERÍA DE FOTOS
      </h3>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={slidesContainerRef}
          className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
        >
          <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
        <img
          class="w-full h-full object-cover"
          src={uno}
          loading="lazy"
        />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={dos}
      loading="lazy"
    />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={tres}
      loading="lazy"
    />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
          class="w-full h-full object-cover"
          src={cuatro}
          loading="lazy"
        />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={cinco}
      loading="lazy"
    />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={seis}
      loading="lazy"
    />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={siete}
      loading="lazy"
    />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={ocho}
      loading="lazy"
    />
      </div>
      <div
        class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
      >
      <img
      class="w-full h-full object-cover"
      src={nueve}
      loading="lazy"
    />
      </div>
        </div>

        <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button
            role="button"
            className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="prev"
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
          <button
            role="button"
            className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="next"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
