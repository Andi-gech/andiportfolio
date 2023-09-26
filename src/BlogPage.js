import React from "react";

import BlogCard from "./BlogCard";
import useFinblog from "./Hooks/useFinblog";
import LoadingPage from "./LoadingPage";

export default function BlogPage() {
  const { isLoading, data, isError, error } = useFinblog();

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>{error.message}</div>;
  return (
    <div className=" flex-1  flex-col flex items-center ">
      <h2 className="   font-bold text-2xl  my-6  text-buttonhover-color">
        My Blog
      </h2>
      <div className=" flex flex-col  h-400px   w-full">
        <div className=" w-full h-1/6 px-4 ">
          <h2 className=" font-bold text-2xl   my-6 dark:text-white ">
            Recent Blog
          </h2>
        </div>
        <div className="blogcardlist flex flex-1 self-center w-11/12 overflow-auto   flex-row items-center  ">
          {data?.map((p) => {
            return (
              <BlogCard
                id={p.id}
                key={p.id}
                title={p.title}
                description={p.description}
                image={p.image}
                date={p.created_at}
              />
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col     w-full">
        <div className=" w-full h-1/6 px-4 ">
          <h2 className=" font-bold text-2xl   my-6 dark:text-white">
            All Blogs
          </h2>
        </div>
        <div className=" flex flex-1 self-center w-11/12    flex-row flex-wrap  items-center  ">
          {data?.map((p) => {
            return (
              <BlogCard
                key={p.id}
                id={p.id}
                title={p.title}
                description={p.description}
                image={p.image}
                date={p.created_at}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
