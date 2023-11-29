import React from "react";
import { useState } from "react";
import { images } from "../../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import navItemsInfo from "../../constants/NavItemsInfo";
import NavItems from "./NavItems";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { FaPenAlt } from "react-icons/fa";
const Header = () => {
  const userState = useSelector((state) => state.user);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navIsVisibleHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  return (
    <section className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-dark-hard text-[white] -mt-3 sticky top-0 z-50 w-[100%]">
      <header className="mx-auto px-5 flex justify-between py-4 items-center">
        <div className="flex flex-row space-x-2 md:space-x-4 lg:space-x-5 items-center justify-normal">
          <img src={images.logo} alt="Logo" className=" h-8 md:h-12 w-24 md:w-36" />
          <Link className="flex flex-row space-x-2" to={"/dashboard"}>
            <FaPenAlt  className="w-6 h-6"/>
            <span className="text-md font-medium hidden md:block">Write Article</span>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between space-x-2">
          <div className="z-50 lg:hidden">
            {navIsVisible ? (
              <AiOutlineClose
                className="w-6 h-6"
                onClick={navIsVisibleHandler}
              />
            ) : (
              <AiOutlineMenu
                className="w-6 h-6"
                onClick={navIsVisibleHandler}
              />
            )}
          </div>

          <div
            className={`${
              navIsVisible ? "right-0" : "-right-full"
            } transition-all duration-300 mt-16 lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
          >
            <ul className="text-white lg:text-dark-soft flex flex-col lg:flex-row gap-y-5 lg:gap-x-2 items-center font-semibold">
              {navItemsInfo.map((item) => {
                return <NavItems key={item.name} item={item} />;
              })}
              {userState.userInfo ? (
                <></>
              ) : (
                <li>
                  <button className="border-2 border-blue-600 px-6 py-2 rounded-full text-blue-600 font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300">
                    <a href="/login">Sign In</a>
                  </button>
                </li>
              )}
            </ul>
          </div>
          {userState?.userInfo ? (
            <div className="">
              <Profile />
            </div>
          ) : (
            <></>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
