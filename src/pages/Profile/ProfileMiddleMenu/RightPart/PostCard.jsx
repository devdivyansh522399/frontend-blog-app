import React from "react";
import ArticleWriter from "../../../../components/ArticleCard/ArticleWriter";
import { BiSolidCommentDetail, BiSolidLike } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import EditAndDelete from "../../../../utils/EditAndDelete";
const PostCard = () => {
  return (
    <div>
      {/* <a href="/"> */}
      {/*blog post card*/}
      <article className="overflow-hidden rounded mt-4 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <div className="sm:flex sm:flex-wrap">
          <div className="sm:w-1/2 h-56 sm:h-auto relative">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              alt=""
            />
          </div>
          <div className="sm:w-1/2 p-4">
            {/*post category*/}
            <div className="flex flex-row justify-between relative">
              <span className="uppercase tracking-wide inline-block px-2 py-1  rounded-full text-xs bg-gray-300 text-gray-600">
                travel
              </span>
              <EditAndDelete />
            </div>
            {/*post title*/}
            <h4 className="text-lg font-semibold capitalize text-gray-800 mt-2">
              Top destinations you should travel before...
            </h4>
            {/*post excerpt*/}
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet conse ctetur adipis icing elit
              Delectus...
            </p>
            {/*post user info*/}
            <ArticleWriter />
            <div className="flex flex-row space-x-4 mt-4 opacity-80">
              <button className="flex flex-row items-center space-x-2">
                <BiSolidLike />
                <span>Upvote</span>
              </button>
              <button className="flex flex-row items-center space-x-2">
                <BiSolidCommentDetail />
                <span>Discuss</span>
              </button>
              <button className="flex flex-row items-center space-x-2">
                <BsShareFill />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </article>
      {/* </a> */}
    </div>
  );
};

export default PostCard;
