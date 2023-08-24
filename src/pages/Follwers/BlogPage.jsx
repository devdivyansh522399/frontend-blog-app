import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import hashtags from "../../constants/Hashtags";
import NavItems from "../Blog Pages/Component/NavItems";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BlogSection from "../Blog Pages/Component/BlogSection";
import CTA from '../Home/Container/CTA'
import Landing from "../Blog Pages/Component/Landing";

const BlogPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showItem, setShowItem] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let count = windowWidth / 150;
  return (
    <MainLayout>
      <section className="max-w-7xl mt-5 mx-auto p-3">
        <div className="">
          <ul className="flex flex-row justify-around items-center bg-dark-soft text-white rounded-xl mx-2 ">
            {hashtags.slice(0, count - 1).map((item) => {
              return <NavItems item={item} />;
            })}
            <button
              className="py-2 px-2 rounded  text-md font-roboto flex flex-row items-center justify-between"
              type="button"
              onClick={() => setShowItem(!showItem)}
            >
              <NavItems item={hashtags.at(count - 1)}></NavItems>
              {showItem ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          </ul>
          {showItem && (
            <div
              className={`absolute right-0 mr-6 xl:ml-[1160px] xl:right-auto max-w-[160px]  z-10 mt-2 p-4  rounded-lg bg-dark-soft text-white py-1 outline-none font-medium font-roboto`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={-1}
            >
              {hashtags.slice(count, -1).map((item) => {
                return (
                  <div className="flex flex-row items-center justify-start">
                    <a
                      href={`/`}
                      className="block px-2 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      {item}
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Landing/>
      <BlogSection title={"Latest Articles"}/>
      <BlogSection title={"Top Stories"}/>
      <BlogSection title={"Recommended for you"}/>
      <CTA/>
    </MainLayout>
  );
};

export default BlogPage;
