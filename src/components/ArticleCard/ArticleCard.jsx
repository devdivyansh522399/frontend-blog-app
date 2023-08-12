import React from "react";
import images from "../../constants/image";
import ArticlePhoto from "./ArticlePhoto";
import ArticleContent from "./ArticleContent";
import HashTags from "./HashTags";
import ArticleWriter from "./ArticleWriter";
import hashtags from "../../constants/Hashtags";
const ArticleCard = (props) => {
  return (
    <div
      className={`shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full mt-4 lg:m-2 md:w-[calc(50%-20px)] lg:w-[calc(33.3%-30px)] rounded-lg ${props.className}`}
    >
      <ArticlePhoto photo={images.post1} />
      <div className="p-5">
        <ArticleContent />
        <HashTags tags={hashtags}/>
        <ArticleWriter />
      </div>
    </div>
  );
};

export default ArticleCard;
