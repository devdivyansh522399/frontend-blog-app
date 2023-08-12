import React from "react";
import HashTags from "../../../components/ArticleCard/HashTags";
import hashtags from "../../../constants/Hashtags";
import SocialMedia from "../../../components/SocialMedia";

const SuggestedPost = ({ className, header, posts = [] }) => {
  return (
    <div className="mt-8 lg:mt-14">
      <div
        className={`w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg p-4 ${className}`}
      >
        <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
          {header}
        </h2>
        <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
          {posts.map((item) => {
            return (
              <div
                key={item._id}
                className="flex space-x-3 flex-nowrap items-center"
              >
                <img
                  src={item.image}
                  alt="Laptop"
                  className="aspect-square object-cover rounded-lg w-1/5"
                />
                <div className="text-sm font-roboto text-dark-hard font-medium ">
                  <h3 className="md:text-base font-roboto text-sm text-dark-hard font-medium lg:text-lg">
                    {item.title}
                  </h3>
                  <span className="text-xs opacity-50 italic">
                    {new Date(item.createAt).toLocaleDateString("en-in", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="font-roboto font-bold text-xl mt-8 text-dark-hard md:text-xl">
          Use Tags
        </h3>
        <HashTags tags={hashtags} />
      </div>
      <SocialMedia/>
    </div>
  );
};

export default SuggestedPost;
