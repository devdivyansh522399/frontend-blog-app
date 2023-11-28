import React from "react";
import MainLayout from "../../components/MainLayout";
import CTA from "./Container/CTA";
import Navbar from "../Blog Pages/Component/Navbar";
import { getAllPosts } from "../../services/Index/posts";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Post from "./Container/Post";
import SuggestedPost from "../ArticleDetails/Container/SuggestedPost";
import PostSkeleton from "./Container/PostSkeleton";
import { BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  console.log(data);
  return (
    <MainLayout>
      <Navbar />
      <div className="max-w-8xl mx-auto px-5 flex flex-col lg:flex-row lg:space-x-3">
        <div className="lg:w-2/3 w-full mt-8 lg:mt-14">
          {isLoading ? (
              [...Array(4)].map((item, index) => (
                <PostSkeleton key={index} />
              ))
          ) : (
            data?.data?.post.map((post) => {
              return <Post post={post} />;
            })
          )}
        </div>
        <div className="w-full lg:w-1/3 flex">
          <SuggestedPost header={"Trending"}/> 
        </div> 
      </div>
      <div className="flex flex-row justify-center items-center mt-3">
          <button
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center"
            onClick={() => navigate("/blog")}
          >
            <span>Explore More</span>
            <BiShow />
          </button>
        </div>
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
