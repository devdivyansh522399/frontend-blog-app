import React from 'react'
import { BiImageAlt } from 'react-icons/bi'

const PostSkeleton = () => {
  return (
    <div className='p-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg mb-4'>
         <div className="p-5">
          {/* title */}
          <div className="flex justify-between flex-nowrap items-center mt-6">
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              {/* profile image */}
              <div className="w-9 zh-9 md:w-10 md:h-10 rounded-full bg-slate-300" />
              <div className="flex flex-col">
                {/* user's name */}
                <div className="w-24 h-2 bg-slate-300 rounded-lg" />
                {/* verified status */}
                <div className="w-16 h-2 mt-2 bg-slate-300 rounded-lg" />
              </div>
            </div>
            {/* date */}
            <div className="w-10 h-2 mt-4 bg-slate-300 rounded-lg" />
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col w-3/4'>
                <div className="w-56 h-2 mt-4 bg-slate-300 rounded-lg" />
                {/* caption */}
                <div className="w-24 h-2 mt-4 bg-slate-300 rounded-lg" />
            </div>
            <div className="w-1/4 aspect-video bg-slate-300" />
          </div>
        </div>
    </div>
  )
}

export default PostSkeleton