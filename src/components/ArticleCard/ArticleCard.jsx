import React from "react";
import images from "../../constants/image";
import ArticlePhoto from "./ArticlePhoto";
import ArticleContent from "./ArticleContent";
import { Link, useNavigate } from "react-router-dom";
const ArticleCard = ({ post, className}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[300px] my-3 rounded-lg mx-auto bg-[#ececec] ${className} flex flex-col justify-between`}
      onClick={() => navigate(`/blog/${post.slug}`)}
    >
      <div>
        <ArticlePhoto photo={post.photo ? post.photo : images.defaultPost} />
        <ArticleContent post={post} />
      </div>
      <div className="flex items-center justify-between p-3">
        <Link
          to={`/blog/${post.slug}`}
          className="flex flex-row items-center space-x-1"
        >
          <img
            src={post.user.avatar ? post.user.avatar : images.LoginProfile}
            alt=""
            className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          />
          <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
            {post.user.name}
          </h4>
        </Link>
        <span className="font-bold text-dark-light italic text-sm md:text-base">
          {new Date(post.createdAt).getDate()}{" "}
          {new Date(post.createdAt).toLocaleString("default", {
            month: "long",
          })}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
