import React, { useState } from "react";
import Avatar from "./Avatar";
import { BsFillCameraFill, BsThreeDotsVertical } from "react-icons/bs";
import { images } from "../../../constants";
import { useSelector } from "react-redux";

const ProfileRight = () => {
  const [follow, setFollow] = useState(false);
  const userState = useSelector((state) => state.user);
  const user = userState.userInfo.user;
  return (
    <>
      <div>
        <img
          src={images.Loginphoto}
          alt=""
          className="w-full  h-36 md:h-60 lg:h-72 object-cover  p-2 overflow-hidden rounded-xl"
        />
        <div className="absolute -translate-y-12 translate-x-4">
          <button
            type="submit"
            className="text-white bg-[#2299fa] font-medium rounded-lg text-sm px-3 py-2 "
          >
            <BsFillCameraFill />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center rounded-full">
        <div className="mx-auto w-28 h-28 lg:w-48 lg:h-48 relative -mt-16 lg:-mt-24 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32 lg:h-48"
            src={user.avatar ? user.avatar : images.LoginProfile}
            alt="Woman looking front"
          />
        </div>
      </div>
      <div className="p-4 font-bold font-roboto">
        <h1 className="text-3xl  text-center">Divyansh Dev</h1>
        <div className="flex flex-col space-x-4 items-center justify-center p-2">
          <a href="/">
            <span className="font-roboto font-medium mt-1">2.3k Followers</span>
          </a>
          <div className="-space-x-4">
            <Avatar avatar={images.LoginProfile}/>
            <Avatar avatar={images.LoginProfile}/>
            <Avatar avatar={images.LoginProfile}/>
            <Avatar avatar={images.LoginProfile}/>
            <Avatar avatar={images.LoginProfile}/>
            <Avatar avatar={images.LoginProfile}/>
          </div>
          <button
            type="button"
            className={`text-white font-medium rounded-full text-[15px]  mx-11 mt-2 py-2 px-3 text-center ${
              follow ? "bg-[green]" : "bg-blue-600"
            }`}
            onClick={() => setFollow(!follow)}
          >
            {!follow ? "Follow +" : "following"}
          </button>
        </div>
          <div className="flex flex-row justify-end lg:hidden">
            <button
              type="button"
              className={`text-dark-hard font-medium rounded-full text-[15px] text-end`}
            >
              <BsThreeDotsVertical/>
            </button>
          </div>
      </div>
    </>
  );
};

export default ProfileRight;
