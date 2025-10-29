import React, { useRef, useState, useId, type KeyboardEvent } from "react";
import Slider from "react-slick";

import ArrowButton from "../ArrowButton";
import { useGhibliSlides } from "../../hooks/useMovies";
import View from "./view";

const Carousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const headingId = useId();
  const liveId = useId();
  const { slides, loading,error } = useGhibliSlides();   
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    accessibility: false,
    beforeChange: (_: number, next: number) => setCurrent(next),
    nextArrow: (
      <ArrowButton position="next" label="Next Slide" onClick={() => {}} />
    ),
    prevArrow: (
      <ArrowButton position="prev" label="Previous Slide" onClick={() => {}} />
    ),
    autoplay: autoPlay,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus:true,
    swipe: true,
    adaptiveHeight: true,
  } as const;


  const goTo = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {    
    if (e.key === "ArrowRight") {
      e.preventDefault();
      sliderRef.current?.slickNext();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      sliderRef.current?.slickPrev();
    }
  };

  
  if (loading) {
    return (
      <div
        className="h-[540px] w-[1096px] rounded-xl bg-white/5 animate-pulse flex items-center justify-center"
        aria-busy="true"
      >
        <p className="text-gray-400">Loading movies...</p>
      </div>
    );
  }

  if (error ||  slides.length===0) {
    return (
      <div
        className=" h-[540px] w-[1096px] p-6 text-red-400 bg-red-950/20 rounded-xl flex justify-center items-center"
        role="alert"
      >
        {error||"NO Movies Found"}
      </div>
    );
    
  }

  

  return (
   <View
   headingId={headingId}
   liveId={liveId}
   onKeyDown={onKeyDown}
   sliderRef={sliderRef}
   settings={settings}
   slides={slides}
   current={current}
   goTo={goTo}
   autoPlay={autoPlay}
   setAutoPlay={setAutoPlay}
   />
  );
};

export default Carousel;
