import React, { useState } from "react";
import hashtags from "../../../../constants/Hashtags";
import HashTags from "../../../../components/ArticleCard/HashTags";
import WorkandEducation from "./WorkandEducation";

const IntroSection = () => {
  const [editBio, setEditBio] = useState(false);
  const [valueBio, setValueBio] = useState("Write your bio here");
  return (
    <>
      <h1 className=" text-2xl font-bold text-center">Introduction</h1>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {!editBio ? (
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-md p-2">{valueBio}</h1>
          <button
            type="button"
            className="text-white font-medium rounded-3xl text-[15px] bg-blue-600 mt-2 py-2 px-3 text-center"
            onClick={() => setEditBio(!editBio)}
          >
            Edit Bio
          </button>
        </div>
      ) : (
        <form action="" className="flex flex-row justify-between items-center">
          <input
            type="text"
            className="text-md w-full bg-transparent p-2 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none font-roboto text-dark-soft"
            placeholder="Write your bio here"
            onChange={(e)=>setValueBio(e.target.value)}
            value={valueBio}
          />
          <button
            type="button"
            className="text-white font-medium rounded-3xl text-[15px] bg-[green] mt-2 py-2 px-3 text-center"
            onClick={() => setEditBio(!editBio)}
          >
            Save
          </button>
        </form>
      )}
       <WorkandEducation/>
      <div>
        <h1 className="text-md">Choose your interest</h1>
        <HashTags tags={hashtags} className={"bg-[#5cdb95]"} />
      </div>
    </>
  );
};

export default IntroSection;
