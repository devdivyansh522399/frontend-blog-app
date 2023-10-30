import React from "react";
import images from "../../constants/image";
import ArticlePhoto from "./ArticlePhoto";
import ArticleContent from "./ArticleContent";
import { useNavigate } from "react-router-dom";
const ArticleCard = ({post, className}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`max-w-[380px] my-3 rounded-lg  bg-[#f0efef] ${className}`} onClick={() => navigate(`/blog/${post.slug}`)}
    >
      <ArticlePhoto photo={post.photo ? post.photo : images.defaultPost}/>
      <div className="p-3">
        <ArticleContent post={post}/>
        <div className="flex items-center justify-between gap-x-2 md:gap-x-2.5 mt-2">
          <a href="/" className="flex flex-row items-center space-x-1">
            <img
              src={post.user.avatar ? post.user.avatar : images.LoginProfile}
              alt=""
              className="w-5 h-5 md:w-10 md:h-10 rounded-full"
            />
            <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
              {post.user.name}
            </h4>
          </a>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
          {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
