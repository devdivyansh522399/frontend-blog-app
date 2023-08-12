import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialMedia = ({ url, title }) => {
  return (
    <div className="flex flex-col mt-2 p-2 space-y-3">
      <h1 className="font-roboto text-xl mt-2 font-medium text-dark-hard">Share on :</h1> 
      <div className="w-full flex justify-around">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
        >
          <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://twitter.com/intent/tweet?url=${url}`}
        >
          <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
        >
          <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send/?text=${url}`}
        >
          <FaWhatsappSquare className="text-[#25D366] w-12 h-auto" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send/?text=${url}`}
        >
          <FaLinkedin className="text-[#3874ff] w-12 h-auto" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
