import React from "react";
import { useParams } from "react-router-dom";
import useFindBlogdetail from "./Hooks/useFindBlogdetail";
import LoadingPage from "./LoadingPage";

export default function Blogdetail() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFindBlogdetail(id);
  if (isLoading) return <LoadingPage />;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className=" flex  dark:text-white text-black flex-1 flex-col items-center justify-center mb-10">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content }}
        className="flex flex-1 flex-col items-center justify-center sm:w-1/2  flex-wrap shadow-lg overflow-hidden  w-11/12 flex-shrink "
      ></div>
    </div>
  );
}
