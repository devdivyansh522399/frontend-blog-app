import React from 'react'

const FooterCol = (props) => {
  const items = props.links; 
  return (
    <div className={`col-span-5 md:col-span-4 lg:col-span-2 ${props.className}`}>
          <h2 className="text-dark-light font-bold lg:text-2xl text-lg underline">{props.name}</h2>
          <ul className="text-[#e4dbfc] text-sm mt-5 space-y-5 lg:text-xl">
              {
                items.map((item, index) => {
                    return (
                    <li key={index}>
                        <a href="/">{item}</a>
                    </li>
                    )
                })
              }
          </ul>
        </div>
  )
}

export default FooterCol