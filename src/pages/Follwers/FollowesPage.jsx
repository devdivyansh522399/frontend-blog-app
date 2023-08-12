import React from "react";
import MainLayout from "../../components/MainLayout";
import FollowersCard from "./FollowersCard";
const FollowesPage = ({title}) => {
  return (
    <MainLayout>
      <h1 className="mt-4 mx-6 rounded-xl font-roboto text-3xl font-bold text-center">
         {title}
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5 space-y-5 my-5">
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
         <FollowersCard/>
      </div>
    </MainLayout>
  );
};

export default FollowesPage;
