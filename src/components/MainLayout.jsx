import Header from "./Header/Header";
import Footer from "./Footer/Footer";
;

const MainLayout = ({children}) => {
  return (
    <div className="z-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
