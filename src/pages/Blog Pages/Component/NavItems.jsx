import React from "react";
import { Link } from "react-router-dom";
const NavItems = ({ item }) => {
  const link = item.replace(/\s/g, "");
  return (
    <div className=" block py-2 px-4 rounded-full  text-md font-roboto text-sm md:text-base">
      <Link to={`/${link}`}>{item}</Link>
    </div>
  );
};

export default NavItems;
