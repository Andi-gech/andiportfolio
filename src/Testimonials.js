import React, { useState } from "react";
import TestimonyCard from "./TestimonyCard";
import {
  BsArrowDownLeftSquare,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import useUserFeedback from "./Hooks/useUserfeedback";

export default function Testimonials() {
  const [cuurentpage, setcurrentpage] = useState(0);
  const dtata = [
    {
      id: 1,
      name: "Andualem",
      comment: "This is a comment",
    },
    {
      id: 2,
      name: "Andualem2",
      comment: "This is a comment2",
    },
  ];

  const { data: feedback, isLoading, isError } = useUserFeedback();

  const changetonext = () => {
    setcurrentpage((cuurentpage + 100) % (feedback.length * 100));
  };
  const changeback = () => {
    if (cuurentpage >= 100) {
      setcurrentpage((cuurentpage - 100) % (dtata.length * 100));
    }
  };
  // const [name, setname] = useState();
  // const [comment, setcomment] = useState();
  // const handleSubmit = () => {
  //   console.log("sds");
  //   setfeed([...feedback, { name: name, comment: comment }]);
  //   console.log(feedback);
  // };
  return (
    <div className=" flex-1  flex-col flex items-center ">
      <h2 className="   font-bold text-2xl  my-6  text-buttonhover-color">
        Testimonials
      </h2>
      <div className=" flex flex-col  h-400px   w-full">
        <div className="blogcardlist flex flex-1 self-center w-11/12 overflow-hidden  justify-center  flex-row items-center  ">
          <div
            onClick={changeback}
            className=" w-1/6  items-center justify-center h-full sm:flex  hidden"
          >
            <BsArrowLeft size={50} className="dark:text-white text-black" />
          </div>
          <div className=" sm:w-1/2 h-full overflow-hidden ">
            <div
              style={{ transform: `translateX(-${cuurentpage}%)` }}
              className={`w-[102%] p-4  duration-1000  h-full  flex flex-nowrap flex-row`}
            >
              {feedback?.map((p) => {
                return <TestimonyCard name={p.name} comment={p.message} />;
              })}
            </div>
          </div>

          <div className="w-1/6  items-center justify-center h-full sm:flex   hidden">
            <BsArrowRight
              size={50}
              className="dark:text-white text-black"
              onClick={changetonext}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-4      w-full  justify-center items-center">
        <div className=" w-full h-1/6 px-4 flex items-center justify-center ">
          <h2 className=" font-bold text-2xl    my-6 dark:text-white text-black ">
            Add review
          </h2>
        </div>
        <div className=" flex w-full h-fit p-4  items-center justify-center">
          <div class="flex w-72 flex-col  ">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                // onChange={(e) => {
                //   setname(e.target.value);
                // }}
                placeholder="your name"
                class="peer h-full w-full text-black dark:text-white border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-buttonhover-color focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label class="after:content[' '] dark:text-white text-black pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-buttonhover-color after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-buttonhover-color peer-focus:after:scale-x-100 peer-focus:after:border-buttonhover-color peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
            </div>

            <div class="relative h-[100px] w-full mt-4 min-w-[200px]">
              <textarea
                // onChange={(e) => {
                //   setcomment(e.target.value);
                // }}
                type="text"
                class="peer h-full dark:text-white text-black w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-buttonhover-color focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] dark:text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all  after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-buttonhover-color peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-buttonhover-color peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-buttonhover-color peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Comment
              </label>
            </div>
          </div>
        </div>

        <div
          // onClick={handleSubmit}
          className=" bg-button-color hover:cursor-pointer hover:text-buttonhover-color flex items-center justify-center h-[30px] w-[100px]  rounded-md text-white font-bold "
        >
          Hire-me
        </div>
      </div>
    </div>
  );
}
