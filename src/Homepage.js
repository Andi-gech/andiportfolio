import React from "react";

import Project from "./Project";

import useAbout from "./Hooks/useAbout";
import useSocialLink from "./Hooks/useSocialLink";
import { motion } from "motion/react";
import Iconbox from "./Iconbox";
import splash from "../src/Asset/splash.svg";

import icon from "../src/Asset/java-script.png";
import djanogoicon from "../src/Asset/django.png";
import node from "../src/Asset/physics.png";
import instagrampic from "../src/Asset/instagram.png";
import telegrampic from "../src/Asset/telegram.png";
import linkdnpic from "../src/Asset/linkedin.png";
import Profile from "../src/Asset/Profile.PNG";
import LoadingPage from "./LoadingPage";

export default function Homepage() {
  
const Link=[
  {
    Github: "https://",
    Linkdn: "https://",
    Instagram: "https://",

  }
]
const data=[

  {
    image: "https://avatars.githubusercontent.com/u/77454965?v=4",
    content: "I am a professional software developer, passionate about crafting efficient and creative solutions. With a strong foundation in software development, I'm dedicated to delivering high-quality code and contributing to impactful projects",
  }
]
    return (
      <>
        <motion.div
        className="z-10 flex-1 flex items-center flex-col justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
          <div className=" z-10  min-h-screen  mt-[50px]  w-full flex sm:flex-row  flex-col-reverse flex-warp items-center justify-center ">
            <div className="  flex-1  pl-8 flex flex-col justify-center flex-shrink-0">
              <p className=" text-base dark:text-white text-black font-roboto  font-medium ">
                Welcome To My World
              </p>
              <h1 className=" font-bold dark:text-white text-black font-roboto text-4xl  sm:w-3/5 w-11/12">
                HI, I'm{" "}
                <span className=" text-buttonhover-color font-roboto">
                  Andualem Getachew{" "}
                </span>
                Professional Software developer
              </h1>
              <p className=" w-4/5 pt-4  dark:text-white text-black font-roboto font-medium">
                professional software developer, passionate about crafting
                efficient and creative solutions. With a strong foundation in
                software development, I'm dedicated to delivering high-quality
                code and contributing to impactful projects
              </p>
              <div className="flex sm:flex-row flex-col my-8 justify-between sm:w-3/4 ">
                <div className="flex flex-col">
                  <h2 className=" dark:text-white text-black font-roboto font-bold">
                    Find me At
                  </h2>
                  <div className="flex flex-row pt-2 ">
                    <Iconbox icon={instagrampic} link={Link[0]?.Github} />
                    <Iconbox icon={telegrampic} link={Link[0]?.Linkdn} />
                    <Iconbox icon={linkdnpic} link={Link[0]?.Linkdn} />
                  </div>
                </div>
                <div>
                  <h2 className=" dark:text-white text-black font-roboto font-bold">
                    Best At
                  </h2>
                  <div className="flex flex-row pt-2 ">
                    <Iconbox icon={icon} />
                    <Iconbox icon={djanogoicon} />
                    <Iconbox icon={node} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-1  flex  items-center  justify-center flex-shrink-0 ">
              <div className="h-full w-full flex items-center justify-center">
                <div className=" borderr relative  h-4/5 w-2/3   flex  justify-center items-end ">
                  <img src={splash} alt="Splash" className="   h-[450px] w-[450px] " />

                  <img
                    src={Profile}
                    alt="Splash"
                    className=" absolute rounded-2xl rounded-full sm:absolute  h-[400px] sm:w-[400px]"
                  />

                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        className="min-h-screen sm:h-screen flex sm:flex-row flex-col w-full"
        initial={{ x: "-10vw",opacity: 0 }}
        whileInView={{ x: 0,opacity: 1 }}
        transition={{ type: "spring", stiffness: 20, duration: 8, delay: 0.5 }}
      >
          <div className=" flex-1  flex flex-col items-center justify-center">
            <h1 className=" font-bold  text-3xl text-buttonhover-color font-roboto">
              What Can I Help?
            </h1>
            <p className=" text-buttonhover-color font-roboto font-medium">
              www.Andutii.pages.dev
            </p>
            <p className=" dark:text-white text-black font-roboto font-medium w-5/6 justify-center text-lg">
              I specialize in crafting creative and user-centric solutions. With
              technical expertise, I tackle diverse projects and collaborate
              effectively in interdisciplinary teams. My focus is on designing
              captivating user experiences and solving complex challenges with
              efficiency and elegance
            </p>
            <div className=" flex flex-row w-full pl-16 mt-10">
              <div className=" flex flex-col ">
                <p className=" font-semibold text-lg  text-buttonhover-color font-roboto">
                  2yrs+
                </p>
                <p className="font-bold text-sm  dark:text-white text-black">
                  experiences
                </p>
              </div>
              <div className=" flex flex-col ml-12">
                <p className=" font-semibold text-lg  text-buttonhover-color font-roboto">
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
            <h1 className=" font-bold  text-3xl text-buttonhover-color font-roboto">
              About Me
            </h1>
            <p className=" text-buttonhover-color font-roboto font-medium">
              www.Andutii.pages.dev
            </p>
            <div className="w-5/6  ">
              <p className=" dark:text-white text-black font-roboto font-medium  h-18 text-ellipsis justify-center text-lg">
                {data[0].content}
              </p>
            </div>

            <div className=" flex flex-row hover:cursor-pointer w-full pl-16 mt-10">
              <div className=" flex flex-col   font-bold dark:text-white text-black font-roboto h-11 w-28  rounded-md  bg-buttonhover-color items-center justify-center">
                <p>Download Cv</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        className="sm:m-0 mt-12 w-s "
        initial={{ x: "10vw" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 2 }}
      >
          <Project />
        </motion.div>
      </>
    );
  
}
