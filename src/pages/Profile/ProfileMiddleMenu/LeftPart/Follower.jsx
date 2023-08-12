import images from "../../../../constants/image";
const Follower = () => {
  return (
    <a href="/">
      <div className=" flex flex-col p-3 items-center m-1 bg-white rounded-xl">
      <img src={images.LoginProfile} alt="" className="h-10 w-10 mt-1 mb-2" />
      <h1 className="text-xs">follower 1</h1>
    </div>
    </a>
  );
};

export default Follower;
