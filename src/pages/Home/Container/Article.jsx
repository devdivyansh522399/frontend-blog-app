import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import Pagination from "../../../components/Pagination";

const Article = () => {
  const totalPages = 50; // Replace this with the actual total number of pages
  return (
    <>
      <div className="flex flex-wrap md:justify-between justify-center  p-3 pb-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="flex flex-row justify-center p-3"><Pagination totalPages={totalPages} /></div>
    </>
  );
};

export default Article;
