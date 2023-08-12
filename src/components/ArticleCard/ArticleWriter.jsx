import React from 'react'
import { BsCheckLg } from "react-icons/bs";
import images from '../../constants/image';

const ArticleWriter = ({className}) => {
  return (
    <div className={`flex justify-between flex-nowrap items-center mt-3 ${className}`}>
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.LoginProfile}
              alt=""
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Divyansh Dev
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[rgb(155,204,237)] p-0.5 rounded-full">
                  <BsCheckLg className="w-3 h-3 text-[#0a0a0a]" />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            02 May
          </span>
        </div>
  )
}

export default ArticleWriter