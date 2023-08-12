import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { images } from "../../constants";
import Header from "../../components/Header/Header";
import {  useMutation, useQuery } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../../services/Index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userActions } from "../../store/reducer/userReducer";
import { getToken } from "../../services/token";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  let profileInfo = {};
  const {data : profileData, isLoading: profileIsLoading} = useQuery({
    queryFn : () =>{
        profileInfo = getUserProfile({token : getToken(), _id : userState.userInfo.user._id})
        return profileInfo
    },
    queryKey : ['profile']
  })
  const { mutate } = useMutation({
    mutationFn: ({ name, password }) => {
      return updateProfile({
        token: getToken(),
        _id : userState.userInfo.user._id,
        userData: { name, password },
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      toast.success("Profile is updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }

  }, [navigate, userState.userInfo]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "", 
      password: "",
      avatar : ""
    },
    values : {
        name : profileIsLoading ? "" : profileData?.user.name,
        avatar: profileIsLoading ? "" : profileData?.user.avatar

    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const { name, password } = data;
    mutate({name , password})
  };
  return (
    <>
      <Header />
      <img
        src={images.Loginphoto}
        alt=""
        className="absolute z-[-1] w-full h-[100%] opacity-50"
      />
      <section className="container mx-auto px-5">
        <div className="w-full max-w-sm mx-auto bg-[#bbbbbb] p-3 rounded-xl mt-16">
          <h1 className="text-2xl font-roboto font-bold text-center mt-1 underline text-dark-soft">
            Update Your Account
          </h1>
          <ProfilePicture avatar={userState.userInfo.user?.avatar}/>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-3 md:space-y-4 p-2 font-roboto"
          >
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="Enter name"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
                  errors.name ? "border-red-500" : "border-[#08fb51]"
                }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-gray-900 "
              >
                New Password (optional)
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  pattern : {
                    value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                    message : "Minimum 8 characters, at least one letter, one number and one special character required"
                  }
                })}
                placeholder="Enter new password"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
                  errors.password ? "border-red-500" : "border-[#08fb51]"
                }`}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-center m-1">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 mt-5 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProfilePage;
