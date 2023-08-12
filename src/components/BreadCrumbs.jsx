import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({data}) => {
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
        {
            data.map((item, index) =>{
                return (
                    <div className={`text-black opacity-50 text-sm md:text-lg font-roboto`} key={index}>
                        <Link to={item.link}>{item.name}</Link>
                        {index !== data.length-1 ? (<span className='p-1'>/</span>) : ""}
                    </div>
                )
            })
        }
    </div>
  )
}

export default BreadCrumbs