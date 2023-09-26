import React, { useState } from "react";
import useDarkside from "./useDarkside";
import { Switch } from "@headlessui/react";
import {
  BsSunFill,
  BsMoonFill,
  BsHouse,
  BsInputCursorText,
} from "react-icons/bs";
import { FaBlog, FaComment, FaCommentAlt, FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";
export default function Header() {
  const [colorTheme, setTheme] = useDarkside();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className=" flex-row flex ali items-center justify-between  h-12 m-4">
      <div className=" w-fit h-full   dark:text-white text-black flex items-center justify-center text-xl font-bold ">
        Andutii.com
      </div>
      <div className=" flex-row h-full items-center sm:flex hidden justify-center ">
        <Link
          to={"/"}
          className=" list-none mx-4 hover:cursor-pointer dark:hover:text-buttonhover-color hover:text-buttonhover-color dark:text-white text-black font-bold  text-base"
        >
          Home
        </Link>
        <Link
          to={"/blogs"}
          className=" list-none  mx-4 hover:cursor-pointer dark:hover:text-buttonhover-color hover:text-buttonhover-color dark:text-white text-black font-bold  text-base"
        >
          Blogs
        </Link>
        <Link
          to={"/testimonials"}
          className=" list-none  mx-4 hover:cursor-pointer dark:hover:text-buttonhover-color hover:text-buttonhover-color dark:text-white text-black font-bold  text-base"
        >
          Testimonials
        </Link>
        <Link className=" list-none  mx-4 hover:cursor-pointer dark:text-white dark:hover:text-buttonhover-color  hover:text-buttonhover-color text-black font-bold  text-base">
          Projects
        </Link>
      </div>
      <div className="flex flex-row  h-5/6">
        <Switch
          checked={darkSide}
          onChange={toggleDarkMode}
          className={`${
            darkSide ? " bg-zinc-700" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center self-center mx-4 rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          {!darkSide ? (
            <BsSunFill
              color="white"
              className={`${
                darkSide ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full  bg-orange-400 transition`}
            ></BsSunFill>
          ) : (
            <BsMoonFill
              size={12}
              color="white"
              className={`${
                darkSide ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full  bg-orange-400 transition`}
            ></BsMoonFill>
          )}
        </Switch>
        <div className=" bg-button-color hover:cursor-pointer hover:text-buttonhover-color flex items-center justify-center  w-28  rounded-md text-white font-bold ">
          Hire-me
        </div>
      </div>
      <div className=" flex-row sm:hidden  fixed  right-0 w-11/12 items-center justify-center   self-center justify-self-center dark:bg-white-opacity-20 bg-black-opacity-20 backdrop-blur-lg rounded-full mx-4 left-0 drop-shadow-lg bottom-0 flex  h-[60px]  ">
        <Link
          to={"/testimonials"}
          className=" h-[50px] w-[50px]  mx-4 rounded-full shadow-sm flex items-center justify-center dark:shadow-black shadow-white"
        >
          <FaComment className=" hover:text-buttonhover-color dark:text-white font-extrabold text-lg  " />
        </Link>
        <Link
          to={"/"}
          className=" h-[50px] w-[50px]  mx-4 rounded-full shadow-sm flex items-center justify-center dark:shadow-black shadow-white"
        >
          <FaHome className="hover:text-buttonhover-color dark:text-white font-extrabold text-lg  " />
        </Link>
        <Link
          to={"/blogs"}
          className=" h-[50px] w-[50px]  mx-4 rounded-full shadow-sm flex items-center justify-center dark:shadow-black shadow-white"
        >
          <FaBlog className=" hover:text-buttonhover-color dark:text-white font-extrabold text-lg " />
        </Link>
      </div>
    </div>
  );
}
