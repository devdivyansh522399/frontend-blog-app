import React from "react";
import { Link } from "react-router-dom";
import chapters from "../../../constants/chapters";
import { FaArrowRightToBracket } from "react-icons/fa6";
const SideNav = () => {
  return (
    <div className="fixed top-0 left-0 w-72 h-screen pt-20 mt-6 bg-gray-100 rounded-lg">
      <div className="h-full px-3 pb-4 overflow-y-auto ">
        <ul className="space-y-2 font-medium px-2 ">
          {chapters.map((item) => (
            <li key={item} className="bg-gray-300 rounded-lg">
              <Link className="flex items-center justify-between p-2 text-gray-700 rounded-lg hover:bg-Blue hover:text-whiteLight text-md">
                <span className="ml-3 text-black">{item}</span>
                <FaArrowRightToBracket />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="px-5 pb-4 overflow-y-auto bg-white font-medium absolute bottom-0 w-full">
        <Link className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-Blue hover:text-whiteLight text-lg">
          <RiRobot2Fill />
          <span className="ml-3">Support</span>
        </Link>
      </div> */}
    </div>
  );
};

export default SideNav;
