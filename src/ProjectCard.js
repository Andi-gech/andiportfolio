import React from "react";
import blogimage from "../src/Asset/page.jpeg";
import { Link } from "react-router-dom";
export default function ProjectCard({ image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className=" w-300px  h-250px my-2 mx-3   flex-shrink-0  dark:shadow-white  shadow-gray shadow-md rounded-lg  overflow-hidden"
    >
      <img src={image} className=" flex h-full w-full" />
    </a>
  );
}
