import React from "react";
import images from "../../constants/image";
import ArticlePhoto from "./ArticlePhoto";
import ArticleContent from "./ArticleContent";
const ArticleCard = (props) => {
  return (
    <div
      className={`max-w-[400px]  mt-4  md:w-[calc(50%-20px)] lg:w-[calc(33.3%-30px)] rounded-lg bg-[#f0efef] ${props.className}`}
    >
    <a href="/">
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
