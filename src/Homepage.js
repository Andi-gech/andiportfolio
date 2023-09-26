import React from "react";
import Header from "./Header";
import HomeBody from "./HomeBody";
import Project from "./Project";
import Service from "./Service";
import useAbout from "./Hooks/useAbout";
import useSocialLink from "./Hooks/useSocialLink";
import { link } from "joi";
export default function Homepage() {
  const { data, isLoading, isError, error } = useAbout();
  const { data: Link } = useSocialLink();

  if (data && Link) {
    return (
      <>
        <HomeBody
          image={data[0].image}
          instagram={Link[0]?.Github}
          linkdn={Link[0]?.Linkdn}
          telegram={Link[0]?.Github}
        />
        <Service detail={data[0].content} document={data[0].document} />
        <div className="sm:m-0 mt-12">
          <Project />
        </div>
      </>
    );
  }
}
