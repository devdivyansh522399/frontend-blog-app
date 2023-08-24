import React from "react";
import images from "../../constants/image";
import ArticlePhoto from "./ArticlePhoto";
import ArticleContent from "./ArticleContent";
const ArticleCard = ({className}) => {
  return (
    <div
      className={`max-w-[380px] my-3 rounded-lg bg-[#f0efef] ${className}`}
    >
    <a href="/blog/1">
      <ArticlePhoto photo={images.post1} />
      <div className="p-3">
        <ArticleContent />
        <div className="flex items-center justify-between gap-x-2 md:gap-x-2.5 mt-2">
          <a href="/" className="flex flex-row items-center space-x-1">
            <img
              src={images.LoginProfile}
              alt=""
              className="w-5 h-5 md:w-10 md:h-10 rounded-full"
            />
            <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
              By Divyansh Dev
            </h4>
          </a>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            02 May
          </span>
        </div>
      </div>
    </a>
    </div>
  );
};

export default ArticleCard;
