import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import more from "../src/Asset/more.png";
import useFindProject from "./Hooks/useFindProject";

export default function Project() {
  const { data, isLoading, isError, error } = useFindProject();

  return (
    <div className=" sm:h-screen h-fit flex flex-col w-full items-center">
      <h2 className=" font-bold dark:text-white text-black text-xl  mb-4">
        Projects
      </h2>
      <div className=" flex overflow-auto items-center justify-center flex-row    w-4/5 h-full   flex-no-wrap ">
        <div className="flex flex-row w-full h-full sm:flex-wrap items-center">
          {data?.map((p) => {
            return <ProjectCard key={p.id} image={p.image} link={p.link} />;
          })}

          <div className="w-100px  flex  flex-col items-center  justify-center h-100px  my-2 mx-3 bg-back-color  flex-shrink-0  shadow-white shadow-md rounded-lg ">
            <img
              src={more}
              className=" hover:cursor-pointer hover:opacity-50 w-12 h-12"
            />
            <p className="text-white  ">Find more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
