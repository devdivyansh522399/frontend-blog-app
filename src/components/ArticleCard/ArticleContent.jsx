import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const ArticleContent = () => {
  return (
    <div className='m-0 p-0'>
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Future of AI
        </h2>
        <p className="text-dark-light mt-2 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          tempora cumque adipisci, accusantium vitae fugit!
        </p>
        <div className="pt-4">
          <a
            href="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <FaLongArrowAltRight className="ml-1 " />
          </a>
        </div>
    </div>
  )
}

export default ArticleContent