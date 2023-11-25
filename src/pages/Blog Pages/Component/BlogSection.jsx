import React, { useState } from "react";
import Article from "./Article";
import { useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";

const BlogSection = ({ title }) => {
  const navigate = useNavigate();
  let slides = 0;
  if (window.innerWidth <= 560) {
    slides = 1;
  } else if (window.innerWidth > 560 && window.innerWidth <= 980) {
    slides = 2;
  } 
  else if(window.innerWidth > 980 && window.innerWidth <= 1280){
    slides = 3;
  }
  else {
    slides = 4;
  }
  const [noOfPosts, setNoOfPosts] = useState(slides);
  return (
    <div className=" mt-10">
      <section className="max-w-7xl mt-4 mx-auto">
        <h1 className="text-4xl font-bold font-roboto text-dark-hard px-3">
          {title}...
        </h1>
        <Article noOfPosts={noOfPosts}/>
        <div className="flex flex-row justify-center items-center mt-3">
          <button
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center"
            onClick={() => navigate("/blog")}
          >
            <span>Explore More</span>
            <BiShow />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
