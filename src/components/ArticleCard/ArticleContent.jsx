import React from 'react'
const ArticleContent = () => {
  return (
    <div className='m-0 p-0 space-y-1'>
        <h2 className=" font-bold text-xl text-dark-soft md:text-xl lg:text-[24px]">
          <a href="/" className='hover:underline hover:text-blue-600'>Future of AI</a>
        </h2>
        <p className="text-dark-light mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          tempora cumque adipisci, accusantium vitae fugit! <a href="/" className='text-blue-600'><span>Read More...</span></a>
        </p>
    </div>
  )
}

export default ArticleContent