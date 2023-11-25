import ArticleCard from "../../../components/ArticleCard/ArticleCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/Index/posts";
import toast from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";

const Article = ({noOfPosts, slides}) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  console.log(data);

  
  return (
    <>
      <div className="flex flex-row justify-between flex-wrap">
          {isLoading ? (
            [...Array(4)].map((item, index) => (
              <ArticleCardSkeleton key={index} />
            ))
          ) : isError ? (
            <ErrorMessage />
          ) : (
            data.data.post.slice(0,noOfPosts).map((post) => {
              return (
                  <ArticleCard key={post._id} post={post}/>
              );
            })
          )}
      </div>
    </>
  );
};

export default Article;
