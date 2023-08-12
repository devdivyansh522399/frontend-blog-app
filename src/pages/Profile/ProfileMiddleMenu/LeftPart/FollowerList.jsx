import React from "react";
import Follower from "./Follower";

const FollowerList = () => {
  return (
    <div className="mt-4 bg-[#e4e4e4] p-3 rounded-xl">
      <h1 className=" text-2xl font-bold text-center">Followers List</h1>
      <hr className="h-px my-4 bg-gray-700 border-0"></hr>
      <div className="grid grid-cols-3 md:grid-cols-4">
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
      </div>
      <div className="flex flex-row justify-end mt-2">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-2 text-center">
          <a href="/followers">See More</a>
        </button>
      </div>
    </div>
  );
};

export default FollowerList;
