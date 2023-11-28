
import MainLayout from "../../components/MainLayout";
import BlogSection from "./Component/BlogSection";
import CTA from '../Home/Container/CTA'
import Landing from "./Component/Landing";
import Navbar from "./Component/Navbar";

const BlogPage = () => {
  
  return (
    <MainLayout>
      <Navbar/>
      <Landing/>
      <BlogSection title={"Latest Articles"}/>
      <BlogSection title={"Top Stories"}/>
      <BlogSection title={"Recommended for you"}/>
      <CTA/>
    </MainLayout>
  );
};

export default BlogPage;