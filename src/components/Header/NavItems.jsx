import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const NavItems = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-black-100  absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            |
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button className="px-4 py-2 flex gap-x-2 items-center" onClick={toggleDropdownHandler}>
            <span>{item.name}</span>
            <SlArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 lg:py-2 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max lg:bg-dark-soft rounded-lg`}
            onClick={toggleDropdownHandler}
          >
            <ul className="bg-dark-soft py-2 px-2 gap-y-2 lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="/" className="lg:text-white px-4 py-2 my-2 text-white">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItems;
