import React from "react";

export default function ProjectCard({ image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className=" w-300px  h-250px my-2 mx-3   flex-shrink-0  dark:shadow-white  shadow-gray shadow-md rounded-lg  overflow-hidden"
    >
      <img src={image} alt="" className=" flex h-full w-full" />
    </a>
  );
}
