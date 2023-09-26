import React from "react";

import { Link } from "react-router-dom";
export default function BlogCard({ image, title, date, description, id }) {
  return (
    <Link
      to={`/blogs/${id}`}
      className=" sm:w-400px  w-11/12 h-300px my-2 mx-3  flex flex-col   flex-shrink-0  dark:shadow-white  shadow-gray shadow-md rounded-lg p-4"
    >
      <div className="flex  h-1/2 w-full flex-1 bg-black">
        <img src={image} alt="dd" className=" h-full w-full " />
      </div>

      <div className="flex h-1/2 w-full flex-col ">
        <h2 className=" font-bold dark:text-white text-xl my-1">{title}</h2>
        <h3 className=" font-normal dark:text-white text-base my-1 h-3/4    overflow-hidden">
          {description}
        </h3>
        <p className=" text-buttonhover-color font-semibold text-sm self-end">
          {date}
        </p>
      </div>
    </Link>
  );
}
