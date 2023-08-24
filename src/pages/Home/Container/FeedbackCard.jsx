import { images } from "../../../constants";


const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-5 py-6 rounded-[20px] h-[310px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 bg-opacity-50 shadow-lg shadow-teal-500/50">
    <img src={images.quotes} alt="double_quotes" className="w-[16px] h-[16px] invert" />
    <p className="font-roboto font-normal text-[18px] my-5">
      {content}
    </p>
    <img src={images.quotes} alt="double_quotes" className="w-[16px] h-[16px] invert mb-4 mr-2 ml-auto" />
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px]  text-dark-hard">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px]  text-dark-soft">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;