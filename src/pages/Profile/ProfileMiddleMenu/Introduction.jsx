import React from "react";
import IntroSection from "./LeftPart/IntroSection";
import ActivitySection from "./RightPart/ActivitySection";
import FollowerList from "./LeftPart/FollowerList";

const Introduction = () => {
  return (
    <div className="lg:grid lg:grid-cols-10 mt-4 space-x-3 flex flex-col ">
      <div className="lg:col-span-4 font-roboto text-dark-hard rounded-xl">
        <div className="bg-[#e4e4e4] p-3 rounded-xl">
          <IntroSection />
        </div>
        <FollowerList />
      </div>
        <div className="lg:col-span-6 bg-[#e4e4e4] font-roboto text-dark-hard p-3 rounded-xl mt-4 lg:mt-0">
          <ActivitySection />
        </div>
    </div>
  );
};

export default Introduction;
