import React from 'react'
import { Link } from 'react-router-dom'
const ArticleContent = ({post}) => {
  return (
    <div className='m-0 p-0 space-y-1'>
        <h2 className=" font-bold text-xl text-dark-soft md:text-xl lg:text-[24px]">
          <a href="/" className='hover:underline hover:text-blue-600'>{post.title}</a>
        </h2>
        <p className="text-dark-light mt-2">
          {post.caption}<Link to={`/blog/${post.slug}`} className='text-blue-600'><span className='mx-1'>{"  "}Read More...</span></Link>
        </p>
    </div>
  )
}

export default ArticleContent