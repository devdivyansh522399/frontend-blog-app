import React from 'react'
import profileMenu from '../../../constants/ProfileMenu'
import ProfileRight from './ProfileRight'

const SectionMenu = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-6 gap-x-10">
          <div className="hidden lg:block lg:col-span-1">
            <ul className="p-4 flex flex-col space-y-5 bg-[#e4e4e4] rounded-xl items-center">
               {profileMenu.map((item, index) => {
                return (
                  <li className="rounded-lg flex flex-row items-start" key={index}>
                  <a
                    href={item==="Edit Profile"?"/editprofile" : "/"}
                    className="text-dark-hard  font-medium p-2 font-roboto text-lg"
                  >
                    {item}
                  </a>
                </li>
                )
               })}
            </ul>
          </div>
          <div className="bg-[#e4e4e4] w-full lg:col-span-5  mx-auto p-3 rounded-xl">
              <ProfileRight/>
          </div>
        </div>
  )
}

export default SectionMenu