import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import SuggestedPost from "./Container/SuggestedPost";

import ArticleWriter from "../../components/ArticleCard/ArticleWriter";
import CommentContainer from "../../components/Commmet/CommentContainer";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/Index/posts";
import HashTags from "../../components/ArticleCard/HashTags";
// import toast from "react-hot-toast";
import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "../../components/Editor/Editor";
import { useSelector } from "react-redux";
import ArticleDetailSkeleton from "./Container/ArticleDetailSkeleton";
import ErrorMessage from '../../components/ErrorMessage'
const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const user = userState?.userInfo?.user;

  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${data.slug}` },
      ]);
      setBody(parseJsonToHtml(data?.post?.body));
    },
  });
  
  return (
    <MainLayout>
      {isLoading ? <ArticleDetailSkeleton/> : isError ? <ErrorMessage/> : (
      <section className="container mx-auto max-w-7xl flex flex-col px-5 py-5 lg:grid lg:grid-cols-3 gap-x-10 ">
        <div className="flex flex-col lg:col-span-2">
          <BreadCrumbs data={breadCrumbsData} />
            <article className="flex-1 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5">
              <div className="flex flex-col">
                <ArticleWriter
                  user={data?.post?.user}
                  time={data?.post?.createdAt}
                />
                <button
                  type="button"
                  className="text-white font-medium rounded-full text-[15px] bg-blue-600 mx-11 md:w-[110px] w-[100px] mt-2 p-0.5"
                >
                  Follow +
                </button>
              </div>
              <img
                src={data?.post?.photo}
                alt="Laptop"
                className="rounded-xl w-full my-6"
              />
              {data?.post?.Categories?.map((c, index) => {
                return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm md:text-lg  font-semibold text-gray-700 mr-2 mb-2" key={index}>
                    <Link
                      to={`/blog?category=${c}`}
                      className="text-[#305dff] font-roboto font-medium text-sm"
                    >
                      {c}
                    </Link>
                  </span>
                );
              })
            }
              <h1 className="text-xl font-medium font-roboto text-dark-hard md:text-[26px]">
                {data?.post.caption}
              </h1>
              <div className="mt-4 text-dark-soft">
                <p className="leading-5 mb-3">
                {!isLoading && !isError && (
                <Editor content={data?.post?.body} editable={false} />
              )}
                </p>
                { data?.post?.tags && <HashTags tags={data?.post?.tags} />}
              </div>
              <CommentContainer comments={data?.post?.comments} className="mt-10" logginedUserID={user?._id} postSlug = {data?.post?.slug}/>
            </article>
          )
        </div>
        <SuggestedPost header="Latest" />
      </section> )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
