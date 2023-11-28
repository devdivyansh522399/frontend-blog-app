import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import images from "../../constants/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deletePost } from "../../services/Index/posts";
import { getToken } from "../../services/token";
import toast from "react-hot-toast";

const ArticleWriter = ({ className, post }) => {
  const navigate = useNavigate();
  const editHandler = () => {
    navigate("/dashboard", { state: post });
  };

  const { mutate, islaoding } = useMutation({
    mutationFn: ({ slug }) => {
      return deletePost({
        slug: slug,
        token: getToken(),
      });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/blog");
    },
  });

  const deleteHandler = () => {
    return mutate({ slug: post.slug });
  };

  const userState = useSelector((state) => state.user);
  const loggedInUser = userState?.userInfo?.user;
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex justify-between flex-nowrap items-center ${className}`}
    >
      <div className="flex items-center gap-x-2 md:gap-x-2.5">
        <img
          src={post?.user?.avatar ? post?.user.avatar : images.LoginProfile}
          alt=""
          className="w-9 h-9 md:w-10 md:h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
            {post?.user?.name}
          </h4>
          <div className="flex items-center gap-x-2">
            <span className="bg-[rgb(155,204,237)] p-0.5 rounded-full">
              <BsCheckLg className="w-3 h-3 text-[#0a0a0a]" />
            </span>
            <span className="italic text-dark-light text-xs md:text-sm">
              verified writer
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 justify-center items-center">
        <span className="font-bold text-dark-light italic text-sm md:text-base">
          {new Date(post?.createdAt).getDate()}{" "}
          {new Date(post?.createdAt).toLocaleString("default", {
            month: "long",
          })}
        </span>
        {post?.user._id === loggedInUser._id && (
          <div className="relative">
            <button onClick={() => setOpen(!open)}>
              <BsThreeDotsVertical />
            </button>
            {open && (
              <>
                <div className="flex flex-col rounded-lg absolute z-[10] bg-dark-soft text-white space-y-2 p-3 text-sm font-medium font-roboto -translate-x-20  ">
                  <button
                    className="flex flex-row space-x-1 justify-between"
                    onClick={editHandler}
                  >
                    <div>Edit </div>
                    <AiFillEdit className="w-4 h-auto mx-2" />
                  </button>
                  <button
                    className="flex flex-row space-x-1 justify-between"
                    onClick={deleteHandler}
                  >
                    <div>Delete</div>
                    <AiFillDelete className="w-4 h-auto mx-2" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleWriter;
