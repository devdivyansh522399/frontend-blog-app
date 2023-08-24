import React, { useState } from "react";
import Article from "./Article";
import { useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";

const BlogSection = ({ title }) => {
  const options = [
    { value: "option1", label: "Latest" },
    { value: "option2", label: "Newest" },
    { value: "option3", label: "Popular" },
    // Add more options as needed
  ];
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className=" mt-10">
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-row px-5 justify-between items-start">
          <h1 className="text-4xl font-bold font-roboto text-dark-hard">
            {title}
          </h1>
          <div className="border-none flex flex-row">
            <select
              id="select-option"
              className="block w-full outline-none text-lg font-roboto font-medium mx-3 bg-white"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-dark-hard text-white focus-none"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mt-4 mx-auto">
        <Article />
       <div className="flex flex-row justify-center items-center">
       <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2 text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] md:text-lg flex flex-row space-x-3 items-center"
          onClick={() => navigate('/blog')}
          >
            <span>View All</span>
            <BiShow/>
          </button>
       </div>
      </section>
      
    </div>
  );
};

export default BlogSection;
