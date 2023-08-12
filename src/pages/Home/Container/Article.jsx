import React from "react";
import { FaArrowRight } from "react-icons/fa";

import ArticleCard from "../../../components/ArticleCard/ArticleCard";

const Article = () => {
  return (
    <section className="container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 lg:px-12 pb-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More Articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Article;
