import React from "react";
import { feedback } from "../../../constants/Feedback";
import FeedbackCard from "./FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const FeedBack = () => {
  let slides = 0;
  if (window.innerWidth <= 560) {
    slides = 1;
  } else if (window.innerWidth > 560 && window.innerWidth <= 850) {
    slides = 2;
  } else {
    slides = 3;
  }
  return (
    <section className="container max-w-7xl mx-auto mt-8 p-3">
      <h1 className="text-4xl  font-bold font-roboto text-dark-hard p-2 text-center">
        Reviews
      </h1>
      <div className="flex sm:justify-start justify-center mx-auto p-2">
        <Swiper
          slidesPerView={slides}
          autoplay={{
            delay: 2500
          }}
          Pagination={
            {clickable: true}
          } 
          loop={true}
          spaceBetween={10}
          modules={[Pagination,Autoplay]}
          className="swiper"
          
        >
          {feedback.map((card) => (
            <SwiperSlide>
              <FeedbackCard key={card.id} {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedBack;
