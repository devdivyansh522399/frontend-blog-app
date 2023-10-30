import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/Index/posts";
import toast from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
const Article = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  console.log(data);

  let slides = 0;
  if (window.innerWidth <= 560) {
    slides = 1;
  } else if (window.innerWidth > 560 && window.innerWidth <= 850) {
    slides = 2;
  } else {
    slides = 3;
  }

  return (
    <>
      <div className="flex flex-row justify-between">
          {isLoading ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton key={index} />
            ))
          ) : isError ? (
            <ErrorMessage />
          ) : (
            data.data.post.map((post, index) => {
              return (
                  <ArticleCard key={post._id} post={post} />
              );
            })
          )}
      </div>
    </>
  );
};

export default Article;
