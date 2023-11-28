import React, { useState } from "react";
import EditorBody from "../../components/Editor/EditorBody";
import Header from "../../components/Header/Header";
import Option from "../../components/Option";
import { techDomains } from "../../constants/Category";
import { tags } from "../../constants/Tags";
import { images } from "../../constants";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { createPost, updatePost } from "../../services/Index/posts";
import { getToken } from "../../services/token";
import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const getValuesForSelectedData = (obj) => {
  obj = Object.values(obj);
  const values = obj.map((item) => item.value);
  return values;
};

const Dashboard = () => {
  const location = useLocation();
  const post = location.state;
  console.log(post);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const user = userState?.userInfo?.user;
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState(post?.title);
  const [caption, setCaption] = useState(post?.caption);
  const [tag, setTag] = useState([]);
  const [category, setCategory] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto({ url: URL.createObjectURL(file), file });
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ formData }) => {
      return createPost({
        token: getToken(),
        formData: formData,
      });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });


  const { mutate:updateMutation, isLoading:updateLoading } = useMutation({
    mutationFn: ({ formData, slug }) => {
      return updatePost({
        slug : slug,
        token: getToken(),
        formData: formData,
      });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleSubmit = async () => {
    try {
      const catArray = getValuesForSelectedData(category);
      const tagsArray = getValuesForSelectedData(tag);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("caption", caption);
      formData.append("Body", desc);
      formData.append("Category", catArray);
      formData.append("tags", tagsArray);
      formData.append("userId", user._id);
      formData.append("postPicture", photo.file);
      console.log(formData);
      mutate({ formData: formData });
      toast.success("Post is created");
      navigate("/blog");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  
  const handleUpdate = async () => {
    const catArray = getValuesForSelectedData(category);
    const tagsArray = getValuesForSelectedData(tag);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("caption", caption);
    formData.append("Body", desc);
    formData.append("Category", catArray);
    formData.append("tags", tagsArray);
    formData.append("postPicture", photo.file);
    formData.append("userId", user._id);
    updateMutation({formData : formData, slug:post?.slug})
    toast.success("Post is updated");
    navigate("/blog");
  }

  return (
    <>
      <Header />
      {!isLoading || !updateLoading? (
        <>
          <h1 className="text-center text-2xl my-5 font-medium ">
            Write Your Article Here
          </h1>
          <form className="max-w-7xl mx-auto space-y-5 p-5">
            <div className="mb-6">
              <h2 className="m-1 text-md lg:text-xl font-medium">Title</h2>
              <input
                type="text"
                id="success"
                className=" border border-gray-300 text-dark-soft  placeholder-gray-800 text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Write your title here"
                required
                onBlur={(e) => setTitle(e.target.value)}
                defaultValue={title}
              />
            </div>
            <div className="my-6">
              <h2 className="m-1 text-md lg:text-xl font-medium">Caption</h2>
              <input
                type="text"
                id="success"
                className=" border border-gray-300 text-dark-soft  placeholder-gray-800 text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Write Caption here"
                onBlur={(e) => setCaption(e.target.value)}
                required
                defaultValue={caption}
              />
            </div>
            <div className="my-6">
              <h2 className="my-2 text-md lg:text-xl font-medium">Image</h2>
              <div className="relative rounded-lg flex flex-col space-y-5 justify-center items-start">
                <img
                  className="w-96 rounded-lg"
                  src={
                    photo ? photo?.url : post?.photo ? post.photo : images.post1
                  }
                  alt=""
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="postPicture"
                  className=" p-2 text-center text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white "
                  required
                />
              </div>
            </div>
            <div className="">
              <h2 className="m-1 text-md lg:text-xl font-medium">
                Description
              </h2>
              <EditorBody
                desc={desc}
                setDesc={setDesc}
                initialValue={post?.body}
                required
              />
            </div>
            <Option
              title={"Category"}
              data={techDomains}
              selectedData={category}
              selectFunction={setCategory}
            />
            <Option
              title={"HasTags"}
              data={tags}
              selectedData={tag}
              selectFunction={setTag}
            />
            <div className="flex flex-row gap-y-2 items-center justify-end gap-x-3 pt-2 min-[420px]:flex-row">
              <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center ">
                Clear
              </button>
              {post !== null ? (
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="Red"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
