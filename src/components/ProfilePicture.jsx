import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { createPortal } from "react-dom";
import { images, stables } from "../constants";
import { BsThreeDotsVertical } from "react-icons/bs";
import CropEasy from "./Crop/CropEasy";
import { userActions } from "../store/reducer/userReducer";
import { useMutation } from "@tanstack/react-query";
import { updateProfilePicture } from "../services/Index/users";
import { getToken } from "../services/token";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const ProfilePicture = ({ avatar }) => {
  const [open, setOpen] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [photo , setPhoto] = useState(null)
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { mutate} = useMutation({
    mutationFn: ({formData }) => {
      return updateProfilePicture({
        token: getToken(),
        _id : userState.userInfo.user._id,
        formData: formData,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      setOpenCrop(false);
      localStorage.setItem("account", JSON.stringify(data));
      toast.success("Profile Photo is Deleted");
    },
    onError: (error) => {
      toast.error("Error in profile delete");
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto({url : URL.createObjectURL(file), file})
    setOpenCrop(true);
  }
  const handleDeleteImage = () => {
    try {
      const formData = new FormData();
      formData.append("profilePicture", undefined);
      mutate({formData: formData });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  return (
    <>
      {openCrop && createPortal(<CropEasy photo={photo} setOpenCrop={setOpenCrop}/>, document.getElementById('portal')) }
      <div>
      <div className="flex flex-row justify-end space-x-20 items-start">
        <div className="flex flex-row justify-center mt-6">
          <div className="relative w-32">
            <img
              className="w-24 h-24 rounded-full"
              src={
                avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + avatar
                  : images.LoginProfile
              }
              alt=""
            />
            <div className="w-24 h-24 group hover:bg-gray-200 opacity-70 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500 -translate-y-24">
              <img
                className="hidden group-hover:block w-12"
                src={images.uploadSVG}
                alt=""
              />
              <label htmlFor="profilePicture"></label>
              {
                !open && (<input type="file" className="absolute overflow:hidden w-full opacity-0" id="profilePicture" onChange={handleFileChange} />)
              }
            </div>
          </div>
        </div>
      <button onClick={() => setOpen(!open)} className="mt-8">
        <BsThreeDotsVertical />
        {open && (
          <div className="flex flex-col rounded-lg absolute bg-dark-soft text-white space-y-2 p-3 text-sm font-medium font-roboto -translate-x-20  ">
            <button className="flex flex-row space-x-1 justify-between" onClick={handleDeleteImage}>
              <div>Delete</div>
              <AiFillDelete className="w-4 h-auto mx-2" />
            </button>
          </div>
        )}
      </button> 
      </div>
    </div>
    </>
  );
};

export default ProfilePicture;
