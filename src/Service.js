import React from "react";

export default function Service({ detail }) {
  return (
    <div className="   min-h-screen sm:h-screen flex sm:flex-row flex-col w-full">
      <div className=" flex-1  flex flex-col items-center justify-center">
        <h1 className=" font-bold  text-3xl text-buttonhover-color">
          What Can I Help?
        </h1>
        <p className=" text-buttonhover-color font-medium">
          www.Andutii.pages.dev
        </p>
        <p className=" dark:text-white text-black font-medium w-5/6 justify-center text-lg">
          I specialize in crafting creative and user-centric solutions. With
          technical expertise, I tackle diverse projects and collaborate
          effectively in interdisciplinary teams. My focus is on designing
          captivating user experiences and solving complex challenges with
          efficiency and elegance
        </p>
        <div className=" flex flex-row w-full pl-16 mt-10">
          <div className=" flex flex-col ">
            <p className=" font-semibold text-lg  text-buttonhover-color">
              2yrs+
            </p>
            <p className="font-bold text-sm  dark:text-white text-black">
              experiences
            </p>
          </div>
          <div className=" flex flex-col ml-12">
            <p className=" font-semibold text-lg  text-buttonhover-color">
              50+
            </p>
            <p className="font-bold text-sm  dark:text-white text-black">
              projects
            </p>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center h-full w-3 rounded-md">
        <div className=" w-3 h-1/2 relative  flex items-center justify-center ">
          <div className=" absolute w-full dark:bg-white bg-black h-3 top-0 rounded-md"></div>
          <div className=" absolute w-full dark:bg-white bg-black h-3 top-10 rounded-md"></div>

          <div className=" absolute w-full dark:bg-white bg-black h-3 bottom-0 rounded-md"></div>
          <div className=" absolute w-full dark:bg-white bg-black h-3  bottom-10 rounded-md"></div>
          <div className=" flex w-1 dark:bg-white bg-black h-full"></div>
        </div>
      </div>
      <div className=" flex-1  flex flex-col items-center justify-center">
        <h1 className=" font-bold  text-3xl text-buttonhover-color">
          About Me
        </h1>
        <p className=" text-buttonhover-color font-medium">
          www.Andutii.pages.dev
        </p>
        <div className="w-5/6  ">
          <p className=" dark:text-white text-black font-medium  h-18 text-ellipsis overflow-hidden justify-center text-lg">
            {detail}
          </p>
        </div>

        <div className=" flex flex-row hover:cursor-pointer w-full pl-16 mt-10">
          <div className=" flex flex-col   font-bold dark:text-white text-black h-11 w-28  rounded-md  bg-buttonhover-color items-center justify-center">
            <p>Download Cv</p>
          </div>
        </div>
      </div>
    </div>
  );
}
