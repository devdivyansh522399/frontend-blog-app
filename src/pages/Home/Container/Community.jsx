import React from "react";
import { images } from "../../../constants";

const Community = () => {
  return (
    <section className="hidden md:block container max-witdh-7xl mx-auto mt-8">
      <h1 className="text-4xl text-center font-bold font-roboto text-dark-hard p-2">
        Our Community
      </h1>
      <div id="fullWidthTabContent" className="border-t border-gray-200">
        <div
          className="rounded-lg"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <div className="grid max-w-screen-7xl grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-auto text-dark-hard sm:grid-cols-3 xl:grid-cols-4  sm:p-8">
            <div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:opacity-90">
              <img src={images.Reader} alt="" className="rounded-xl h-48" />
              <div className="p-2 m-2">
                <h1 className="text-xl font-medium font-roboto text-dark-hard text-center">
                  25K+ Happy Reader
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:opacity-90">
              <img src={images.Writer} alt="" className="rounded-xl h-48" />
              <div className="p-2 m-2">
                <h1 className="text-xl font-medium font-roboto text-dark-hard text-center">
                  10k+ Verified Writer
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:opacity-90">
              <img src={images.Articles} alt="" className="rounded-xl h-48" />
              <div className="p-2 m-2">
                <h1 className="text-xl font-medium font-roboto text-dark-hard text-center">
                  100K+ Best Articles
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:opacity-90">
              <img src={images.Subject} alt="" className="rounded-xl h-48" />
              <div className="p-2 m-2">
                <h1 className="text-xl font-medium font-roboto text-dark-hard text-center">
                  50+ Various Domian.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
