import React, { useState } from "react";
import { SiWorkplace } from "react-icons/si";

const WorkandEducation = () => {
  const [edit, setEdit] = useState(false);
  const [work, setWork] = useState("Write your role at workplace here");
  const [studies, setStudies] = useState("Write your Institution Name");
  const [email, setEmail] = useState("Write yopur contact Email");
  const [Qualification, setQualification] = useState("Write your Highest Qualification");
  const [from, setFrom] = useState("Where are you from?");
  return (
    <>
      {!edit ? (
        <>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center space-x-2">
              <SiWorkplace />
              <p>Works as : {work}</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <SiWorkplace />
              <p>Studies at : {studies}</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <SiWorkplace />
              <p>Contact me : {email}</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <SiWorkplace />
              <p>Highest Qualification : {Qualification}</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <SiWorkplace />
              <p>Lives in : {from}</p>
            </div>
          </div>
        </>
      ) : (
        <form className="bg-none p-2">
          <div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setWork(e.target.value)}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Works as
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setStudies(e.target.value)}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Studies At
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contact Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="Text"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setQualification(e.target.value)}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Highest Qualification
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="Text"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setFrom(e.target.value)}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                From
              </label>
            </div>
          </div>
        </form>
      )}
      <div className="flex flex-row justify-between items-center">
        <div className="text-md" />
        <button
          type="button"
          className={`text-white font-medium rounded-3xl text-[15px] ${
            edit ? "bg-[green]" : "bg-blue-600"
          } mt-2 py-2 px-3 text-center`}
          onClick={() => setEdit(!edit)}
        >
          {!edit ? "Edit Introduction" : "Save"}
        </button>
      </div>
    </>
  );
};

export default WorkandEducation;
