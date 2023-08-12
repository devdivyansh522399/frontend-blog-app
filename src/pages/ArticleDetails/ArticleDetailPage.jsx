import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import breadCrumbsData from "../../constants/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPost from "./Container/SuggestedPost";
import postdata from "../../constants/postdata";
import ArticleWriter from "../../components/ArticleCard/ArticleWriter";
import CommentContainer from "../../components/Commmet/CommentContainer";


const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-7xl flex flex-col px-5 py-5 lg:grid lg:grid-cols-3 gap-x-10 ">
        <div className="flex flex-col lg:col-span-2">
          <BreadCrumbs data={breadCrumbsData} />
          <article className="flex-1 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5">
            <div className="flex flex-col">
              <ArticleWriter profile={images.profile1} />
              <button
                type="button"
                className="text-white font-medium rounded-full text-[15px] bg-blue-600 mx-11 md:w-[110px] w-[100px] mt-2 p-0.5"
              >
                Follow +
              </button>
            </div>
            <img
              src={images.post1}
              alt="Laptop"
              className="rounded-xl w-full my-6"
            />
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm md:text-lg  font-semibold text-gray-700 mr-2 mb-2">
              <Link
                to="/blog?category=selectedCategory"
                className="text-[#305dff] font-roboto font-medium text-sm"
              >
                Education
              </Link>
            </span>
            <h1 className="text-xl font-medium font-roboto text-dark-hard md:text-[26px]">
              Help Children get better education
            </h1>
            <div className="mt-4 text-dark-soft">
              <p className="leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sunt modi a dolorum quasi facilis magni, placeat, omnis
                doloribus corporis maiores officia nostrum temporibus laboriosam
                mollitia quas fugiat assumenda? Architecto labore nihil et
                tempore, quos quas sunt laboriosam quisquam excepturi recusandae
                iste pariatur quaerat ullam rerum minus dolorem itaque sint?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                sit quo molestiae architecto officia. Enim reiciendis beatae
                quisquam eaque id voluptates cum iusto tempora distinctio
                aperiam! Illo debitis, eum laborum ea voluptas est nobis
                nostrum? Voluptate alias nostrum reiciendis perferendis nisi
                obcaecati officiis facere cumque! Odio, maxime! Aut fugiat animi
                earum reiciendis neque veritatis tenetur libero explicabo
                aperiam corrupti rerum pariatur quos obcaecati officia,
                architecto possimus commodi vel aliquid. Ex alias atque beatae
                doloremque quae voluptatem quas, cum quo, quisquam, architecto
                expedita hic optio placeat adipisci? Maxime pariatur voluptates
                voluptas facilis, deleniti excepturi modi aut maiores quia
                cupiditate nesciunt similique.
              </p>
            </div>
            <CommentContainer className="mt-10" logginedUserID="a" />
          </article>
        </div>
        <SuggestedPost header="Latest" posts={postdata} />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
