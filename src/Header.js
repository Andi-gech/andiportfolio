import React, { useState } from "react";
import useDarkside from "./useDarkside";
import { Switch } from "@headlessui/react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { FaBlog, FaComment, FaHome } from "react-icons/fa";

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
    <div className="flex-row fixed w-screen px-4 z-[12] flex items-center justify-between h-[60px] dark:bg-zinc-900 dark:bg-opacity-20 bg-blue-50 bg-opacity-25 backdrop-blur-md">
      <div className="w-fit h-full dark:text-white text-black flex items-center justify-center text-xl font-bold">
        Andutii.com
      </div>
      <div className="flex-row h-full items-center sm:flex hidden justify-center">
        <Link
          to={"/"}
          className="list-none mx-4 hover:cursor-pointer dark:hover:text-buttonhover-color hover:text-buttonhover-color dark:text-white text-black font-bold text-base"
        >
          <FaHome size={20} />
        </Link>
        <Link
          to={"/blogs"}
          className="list-none mx-4 hover:cursor-pointer dark:hover:text-buttonhover-color hover:text-buttonhover-color dark:text-white text-black font-bold text-base"
        >
          <FaBlog size={20} />
        </Link>
        <Link
          to={"/testimonials"}
          className="list-none mx-4 hover:cursor-pointer dark:hover:text-buttonhover-color hover:text-buttonhover-color dark:text-white text-black font-bold text-base"
        >
          <FaComment size={20} />
        </Link>
        
      </div>
      <div className="flex flex-row h-5/6">
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
              } inline-block h-4 w-4 transform rounded-full bg-orange-400 transition`}
            />
          ) : (
            <BsMoonFill
              size={12}
              color="white"
              className={`${
                darkSide ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-orange-400 transition`}
            />
          )}
        </Switch>
        <div  onClick={
          () => {
            window.open(
              "mailto:andi.fab23@gmail.com"
            );
          }
        } className="bg-button-color hover:cursor-pointer hover:text-buttonhover-color flex items-center justify-center w-28 rounded-md text-white font-bold">
          Hire-me
        </div>
      </div>
      <div className="flex-row sm:hidden z-10 fixed right-0 w-11/12 items-center justify-center self-center justify-self-center dark:bg-white-opacity-20 bg-black-opacity-20 backdrop-blur-lg rounded-full mx-4 left-0 drop-shadow-lg bottom-0 flex h-[60px]">
        <Link
          to={"/testimonials"}
          className="h-[50px] w-[50px] mx-4 rounded-full shadow-sm flex items-center justify-center dark:shadow-black shadow-white"
        >
          <FaComment className="hover:text-buttonhover-color dark:text-white font-extrabold text-lg" />
        </Link>
        <Link
          to={"/"}
          className="h-[50px] w-[50px] mx-4 rounded-full shadow-sm flex items-center justify-center dark:shadow-black shadow-white"
        >
          <FaHome className="hover:text-buttonhover-color dark:text-white font-extrabold text-lg" />
        </Link>
        <Link
          to={"/blogs"}
          className="h-[50px] w-[50px] mx-4 rounded-full shadow-sm flex items-center justify-center dark:shadow-black shadow-white"
        >
          <FaBlog className="hover:text-buttonhover-color dark:text-white font-extrabold text-lg" />
        </Link>
      </div>
    </div>
  );
}
