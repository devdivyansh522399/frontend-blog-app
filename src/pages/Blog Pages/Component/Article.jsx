import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay} from 'swiper/modules';
const Article = () => {
  let slides = 0;
  if (window.innerWidth <= 560) {
    slides = 1;
  } else if (window.innerWidth > 560 && window.innerWidth <=850) {
    slides = 2;
  } 
  else {
    slides = 3;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center px-3 pb-10">
        <Swiper
          slidesPerView={slides}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          spaceBetween={10}
          
          modules={[Autoplay]}
          className="swiper"
        >
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard/></SwiperSlide>
        <SwiperSlide><ArticleCard className={'mr-3'}/></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Article;
