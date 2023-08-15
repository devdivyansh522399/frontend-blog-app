import React, { useState } from "react";
import { images} from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
const Profile = () => {
  const userState = useSelector((state) => state.user);
  const user = userState?.userInfo?.user;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="relative ml-3">
      <div>
        <button
          type="button"
          className="relative flex rounded-full text-sm flex-row items-center space-x-2"
          id="user-menu-button"
          onClick={() => setOpen(!open)}
        >
          <img
            src={
              user.avatar
              ? user.avatar
              : images.LoginProfile
            }
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <span className="hidden lg:block lg:font-roboto lg:font-medium lg:text-dark-soft lg:text-[16px]">
            {user.name}
          </span>
        </button>
      </div>
      {open && (
        <div
          className="absolute right-0 z-10 mt-2 p-4 origin-top-right rounded-lg bg-dark-soft text-white py-1 outline-none font-medium font-roboto"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <div className="flex flex-row items-center justify-start">
            <MdDashboard className="ml-2" />
            <a
              href={`/profile/${user._id}`}
              className="block px-2 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-0"
            >
              Profile
            </a>
          </div>
          <div className="flex flex-row items-center justify-start">
            <AiTwotoneSetting className="ml-2" />
            <a
              href={`/profile/${user._id}`}
              className="block px-2 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-0"
            >
              Settings
            </a>
          </div>
          <div className="flex flex-row items-center justify-start">
            <BiLogOut className="ml-2"/>
            <button
              href="/login"
              className="block px-2 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-2"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
