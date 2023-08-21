import React, { useState } from 'react'
import Article from '../../Home/Container/Article';

const BlogSection = ({title}) => {
    const options = [
        { value: "option1", label: "Latest" },
        { value: "option2", label: "Newest" },
        { value: "option3", label: "Popular" },
        // Add more options as needed
      ];
    
      const [selectedOption, setSelectedOption] = useState(options[0].value);
    
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
  return (
    <div>
        <section className="max-w-7xl mx-auto mt-4">
        <div className="flex flex-row px-5 justify-between items-start">
          <h1 className="text-4xl font-bold font-roboto text-dark-hard">
            {title}
          </h1>
          <div className="border-none">
            <select
              id="select-option"
              className="block w-full outline-none text-lg font-roboto font-medium px-3 bg-white"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value} className="bg-dark-hard text-white focus-none">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mt-4 mx-auto">
        <Article/>
      </section>
    </div>
  )
}

export default BlogSection