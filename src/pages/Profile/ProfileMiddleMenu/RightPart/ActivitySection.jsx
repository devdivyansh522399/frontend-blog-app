import React from "react";
import PostCard from "./PostCard";

const ActivitySection = () => {
  return (
    <>
      <h1 className=" text-2xl font-bold text-center">Your Articles</h1>
      <hr className="h-px my-2 bg-gray-700 border-0"></hr>
      <div className="flex flex-col lg:flex-row lg:my-2 items-center justify-between">
        <h1 className="font-roboto font-bold text-xl">Sort By </h1>
        <div className="flex flex-row space-x-1 font-roboto font-medium text-xs mt-1 lg:mt-0">
          <button className="bg-[#7b7b7b] text-white p-2 rounded-full">
            By Time
          </button>
          <button className="bg-[#7b7b7b] text-white p-2 rounded-full">
            Most Liked
          </button>
          <button className="bg-[#7b7b7b] text-white p-2 rounded-full">
            Most Shared
          </button>
        </div>
      </div>
      <hr className="h-px my-4 bg-slate-500 border-0"></hr>
      <div className="space-y-5 overflow-scroll max-h-[55rem] no-scrollbar">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default ActivitySection;
