import React from "react";
import ArticleWriter from "../../../components/ArticleCard/ArticleWriter";
import { Link } from "react-router-dom";
import ArticlePhoto from "../../../components/ArticleCard/ArticlePhoto";
import { images } from "../../../constants";
import HashTags from "../../../components/ArticleCard/HashTags";

const Post = ({ post }) => {
  return (
    
        <div className="p-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg mb-4">
      <div>
        <ArticleWriter post={post}/>
        <Link to={`/blog/${post.slug}`}>
        <div className="flex flex-row ">
          <div className="m-0 p-3 space-y-1 w-3/4">
            <h2 className=" font-bold text-xl text-dark-soft md:text-xl lg:text-[24px]">
              {post.title}
            </h2>
            <p className="text-dark-light mt-2">
              {post.caption.split(" ").slice(0,50).join(" ")}
              <Link to={`/blog/${post.slug}`} className="text-blue-600">
                <span className="mx-1">{"  "}Read More...</span>
              </Link>
            </p>
            { post?.tags && <HashTags tags={post?.tags} />}
          </div>
          
          <div className="w-1/4">
             <ArticlePhoto photo={post.photo ? post.photo : images.defaultPost}/>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
