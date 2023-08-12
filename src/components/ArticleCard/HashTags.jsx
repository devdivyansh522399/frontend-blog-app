import React from "react";
import { Link } from "react-router-dom";

const HashTags = ({ tags = [] , className = ""}) => {
  return (
    <div className="pt-3">
      <div>
        {tags.map((item, index) => {
          return (
            <span className={`inline-block ${className ? className : "bg-gray-200"} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`} key={index}>
              <Link to="/">{item}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HashTags;
