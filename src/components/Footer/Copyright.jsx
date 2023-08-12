import React from 'react'
import { images } from '../../constants'
import { AiFillHeart, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Copyright = () => {
  return (
    <>
    <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.logo}
            alt="logo"
            className="brightness-10 invert mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
             We are here to provide news and papers of emerging technology
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2023. All right reversed Divyansh Dev.
          </p>
        </div>
    </>
  )
}

export default Copyright