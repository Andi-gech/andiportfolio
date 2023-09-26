import React from "react";

export default function Iconbox({ icon, link }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className=" flex mx-2  h-12 w-12 rounded-md bg-back-color items-center justify-center  shadow-sm shadow-fuchsia-50 "
    >
      <img src={icon} alt="" className=" h-4/5 w-4/5" />
    </a>
  );
}
