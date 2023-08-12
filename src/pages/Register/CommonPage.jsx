import React, { useState } from "react";
import { images } from "../../constants";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";


const CommonPage = ({ flag }) => {
  const [isLogin, setIsLogin] = useState(flag);
  const classes = "rounded-full bg-dark-soft text-white";
  const navigate = useNavigate()

  return (
    <>
      <img
        src={images.Loginphoto}
        alt=""
        className="absolute z-[-1] w-full h-[100%] opacity-50"
      />
      <section className="container flex flex-row mx-auto  px-5 py-5 items-center space-y-3">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center p-2">
            <img src={images.logo} alt="" className="h-12 w-36 mb-2" />
          </div>
          <div className="w-full max-w-sm mx-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-2 rounded-lg bg-[#c1c8e4]">
            <div className="flex flex-row justify-around mx-2 text-xl bg-none rounded-full w-full">
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
      </section>
        <div className="flex flex-row justify-center m-2">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
    </>
  );
};

export default CommonPage;
