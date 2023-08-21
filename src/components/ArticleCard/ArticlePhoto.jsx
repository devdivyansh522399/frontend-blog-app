import React from 'react'

const ArticlePhoto = (props) => {
  return (
    
    <img
    src={props.photo}
    alt="title"
    className="w-full object-center h-auto md:h-52 lg:h-48 xl:h-60 hover:opacity-70"
  />
  )
}

export default ArticlePhoto