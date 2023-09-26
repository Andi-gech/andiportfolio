import React from "react";
import blogimage from "../src/Asset/user.png";
export default function TestimonyCard({ name, comment }) {
  return (
    <div className=" flex-col flex mr-4  h-full w-full rounded-lg shadow-md flex-shrink-0 dark:shadow-white  overflow-hidden shadow-zinc-400">
      <div className=" flex flex-1 flex-col  items-center justify-center ">
        <img
          src={blogimage}
          alt="mm"
          className=" w-100px h-100px  rounded-full"
        />
        <h2 className=" dark:text-white text-black font-bold">{name}</h2>
      </div>
      <div className="flex flex-1   justify-center">
        <p className=" sm:w-3/4  w-11/12 dark:text-white  text-zinc-700 ">
          {comment}
        </p>
      </div>
    </div>
  );
}
