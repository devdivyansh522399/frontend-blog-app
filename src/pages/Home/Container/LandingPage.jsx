import React from "react";
import { images } from "../../../constants";
import { useSelector } from "react-redux";
import { FaReadme } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <section
      className="container max-w-7xl mx-auto m-3 rounded-xl h-[80vh] md:bg-cover flex flex-col justify-center md:items-center items-end"
      Style={`background-image: url(${images.Landing});`}
    >
      <div className="max-w-5xl text-dark-hard mt-16 mx-3">
        <h1 className="font-roboto text-3xl font-medium">
          Once you learn to read, you will be forever free.
        </h1>
        <h1 className="font-roboto text-xl font-medium italic flex flex-row justify-end mb-5">
          — Frederick Douglass
        </h1>
      </div>

      {!userState?.userInfo ? (
        <div className="flex flex-row space-x-16">
          <button className="text-white bg-gradient-to-r from-[#ff744e] via-[#fc5122] to-[#f9400d] hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center md:text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Write your Article here..
          </button>{" "}
        </div>
      ) : (
        <div className="flex flex-row space-x-16">
          <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center"
          onClick={() => navigate('/blog')}
          >
            <span>Start Reading</span>
            <FaReadme/>
          </button>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center">
            <span>Write your Article here</span>
            <BsFillPenFill/>
          </button>{" "}
        </div>
      )}
    </section>
  );
};

export default LandingPage;
