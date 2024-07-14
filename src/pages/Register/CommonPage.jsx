import React, { useState } from "react";
import { images } from "../../constants";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

const CommonPage = ({ flag }) => {
  const [isLogin, setIsLogin] = useState(flag);
  const classes = "rounded-full bg-dark-soft text-white";
  const navigate = useNavigate();

  return (
    <div className="bg-[#b53bfb] flex flex-col-reverse justify-evenly items-center h-screen space-y-5">
      <div className="flex flex-row justify-center">
        <button
          type="submit"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={() => navigate("/")}
        >
          Return to Home
        </button>
      </div>
      <div className="flex flex-row bg-[white] lg:w-4/5 xl:w-2/3 rounded-3xl h-4/5 justify-between items-center overflow-hidden">
        <div className="w-3/5 hidden lg:block lg:flex-row lg:justify-center items-center">
          <img
            src={isLogin ? images.Loginphoto : images.SignUpPhoto}
            alt=""
            className="object-fit h-4/5"
          />
        </div>
        <div className=" max-w-sm text-sm md:text-base md:w-96 lg:w-2/5 bg-[#5AE4A7] rounded-2xl lg:rounded-none lg:rounded-r-2xl p-5 h-full">
          <div className="flex flex-row justify-around mx-2 text-xl bg-none rounded-full w-full 1/2">
            <div
              className={`w-1/2 p-3 font-semibold flex justify-center items-center transition-all duration-200 ${
                isLogin ? "" : classes
              }`}
            >
              <button onClick={() => setIsLogin(!isLogin)}>
                <a href="/register">Sign Up</a>
              </button>
            </div>
            <div
              className={`w-1/2 p-3 font-semibold flex justify-center items-center transition-all duration-200 ${
                isLogin ? classes : ""
              }`}
            >
              <button onClick={() => setIsLogin(!isLogin)}>
                <a href="/login">Login</a>
              </button>
            </div>
          </div>
          {isLogin ? <LoginPage /> : <SignupPage />}
        </div>
      </div>
    </div>
  );
};

export default CommonPage;
