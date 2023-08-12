import React from "react";
import FooterCol from "./FooterCol";
import Footeritems from "../../constants/FooterItems";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-col-12 lg:grid-col-10 lg:gap-x-10">
        {

          Footeritems.map((item,index)=> {
              return (
                <FooterCol name={item.name} links={item.links} key={index} className={index===2 ? "md:col-start-5" : ""}/>
              )
          })
        }
        <Copyright/>
      </footer>
    </section>
  );
};

export default Footer;
