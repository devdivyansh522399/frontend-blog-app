import React from "react";

const Avatar = ({avatar}) => {
  return (
    <a href="/">
      <img
        className="relative  inline object-cover w-12 h-12 border-2 border-white rounded-full"
        src={avatar}
        alt=""
      />
    </a>
  );
};

export default Avatar;
