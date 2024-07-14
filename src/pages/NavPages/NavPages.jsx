import React from "react";
import Navbar from "../Blog Pages/Component/Navbar";
import SideNav from "./Component/SideNav";
import Header from "../../components/Header/Header";
import HashTags from "../../components/ArticleCard/HashTags";

const NavPages = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="ml-72">
        <Navbar/>
      </div>
    </>
  );
};

export default NavPages;
