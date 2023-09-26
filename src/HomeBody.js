import React from "react";
import Iconbox from "./Iconbox";
import splash from "../src/Asset/splash.svg";
import mypic from "../src/Asset/picss.png";
import Service from "./Service";
import icon from "../src/Asset/java-script.png";
import djanogoicon from "../src/Asset/django.png";
import node from "../src/Asset/physics.png";
import instagrampic from "../src/Asset/instagram.png";
import telegrampic from "../src/Asset/telegram.png";
import linkdnpic from "../src/Asset/linkedin.png";

export default function HomeBody({ image, instagram, telegram, linkdn }) {
  return (
    <div className=" flex-1 flex items-center flex-col justify-center">
      <div className="  min-h-screen   w-full flex sm:flex-row  flex-col-reverse flex-warp items-center justify-center ">
        <div className="  flex-1  pl-8 flex flex-col justify-center flex-shrink-0">
          <p className=" text-base dark:text-white text-black  font-medium ">
            Welcome To My World
          </p>
          <h1 className=" font-bold dark:text-white text-black text-4xl  sm:w-3/5 w-11/12">
            HI, I'm{" "}
            <span className=" text-buttonhover-color">Andualem Getachew </span>
            Professional Software developer
          </h1>
          <p className=" w-4/5 pt-4  dark:text-white text-black font-medium">
            professional software developer, passionate about crafting efficient
            and creative solutions. With a strong foundation in software
            development, I'm dedicated to delivering high-quality code and
            contributing to impactful projects.
          </p>
          <div className="flex sm:flex-row flex-col my-8 justify-between sm:w-3/4  overflow-x-auto">
            <div className="flex flex-col">
              <h2 className=" dark:text-white text-black font-bold">
                Find me At
              </h2>
              <div className="flex flex-row pt-2 ">
                <Iconbox icon={instagrampic} link={instagram} />
                <Iconbox icon={telegrampic} link={telegram} />
                <Iconbox icon={linkdnpic} link={linkdn} />
              </div>
            </div>
            <div>
              <h2 className=" dark:text-white text-black font-bold">Best At</h2>
              <div className="flex flex-row pt-2 ">
                <Iconbox icon={icon} />
                <Iconbox icon={djanogoicon} />
                <Iconbox icon={node} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex  items-center  justify-center flex-shrink-0 ">
          <div className="h-full w-full flex items-center justify-center">
            <div className=" borderr relative  h-4/5 w-2/3  flex  items-end ">
              <img src={splash} alt="Splash" className="  h-full w-full" />

              <img
                src={image}
                alt="Splash"
                className="  rounded-2xl absolute right-6 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
