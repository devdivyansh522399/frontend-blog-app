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
    <section className="container max-w-7xl mx-auto mt-3 rounded-xl h-[80vh] md:bg-cover flex flex-col justify-center md:items-center items-end bg-[#e6e6e6] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">

      <div className="bg-[silver] rounded-full m-1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] mx-auto">
        <img src={images.Albert} alt="" className="rounded-full h-48 w-48 p-2"/>
      </div>
      <div className="max-w-5xl text-dark-hard mt-16 mx-3">
        <h1 className="font-roboto text-3xl font-medium">
          “Strive not to be a success, but rather to be of value.”
        </h1>
        <h1 className="font-roboto text-xl font-medium italic flex flex-row justify-end mb-5">
          — Albert Einstein
        </h1>
      </div>

      {!userState?.userInfo ? (
        <div className="flex flex-col md:row md:space-x-16 mx-auto">
          <button
            className="text-white bg-gradient-to-r from-[#ff744e] via-[#fc5122] to-[#f9400d] hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center md:text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
            onClick={() => navigate("/blog")}
          >
            Start Reading...
          </button>{" "}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row  justify-center items-center mx-auto md:space-x-16 space-y-5">
          <button
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center  mx-auto"
            onClick={() => navigate("/blog")}
          >
            <span>Start Reading</span>
            <FaReadme />
          </button>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center mx-auto"
            onClick={() => navigate("/dashboard")}
          >
            <span>Write your Article here</span>
            <BsFillPenFill />
          </button>{" "}
        </div>
      )}
    </section>
  );
};

export default LandingPage;
