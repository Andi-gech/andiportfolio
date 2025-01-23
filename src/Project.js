import React from "react";
import ProjectCard from "./ProjectCard";
import more from "../src/Asset/more.png";
import useFindProject from "./Hooks/useFindProject";
import profile from "../src/Asset/p.PNG";
import ride from "../src/Asset/ride .PNG";
import quizly from "../src/Asset/quizly.PNG";

export default function Project() {
  const data = [
    {
      id: 1,
      image: profile,
      link: "https://",
      description: "📱 A comprehensive mobile application developed as a final year project, designed to enhance the student experience with intuitive features and functionality."
    },
    {
      id: 2,
      image: "https://api.senaycreatives.com/images/1723206083797-image7.png",
      link: "https://",
      description: "🎬 An innovative movie discovery platform powered by advanced Gemini mood-based search technology, offering a seamless and personalized user experience."
    },
    {
      id: 3,
      image: "https://api.senaycreatives.com/images/1723206209284-6.png",
      link: "https://",
      description: "🌐 A feature-rich online learning platform integrated with interactive exams to provide an engaging and effective educational experience."
    },
    {
      id: 4,
      image: ride,
      link: "https://",
      description: "💼 A ride-sharing application prototype inspired by industry leaders, focusing on real-time tracking and user-friendly ride management features. (Work in progress)"
    },
    {
      id: 5,
      image: quizly,
      link: "https://",
      description: "🛠️ An AI-powered mobile application that generates quizzes from PDFs, streamlining the creation of educational content for teachers and students alike."
    }
  ];

  return (
    <div className="sm:h-screen h-fit flex flex-col w-full items-center">
      <div className="flex flex-col items-center p-4 justify-center w-[98%] rounded-md z-[11] bg-zinc-600 bg-opacity-30 backdrop-blur-md">
        <h2 className="font-bold text-[40px] dark:text-white text-black text-xl mb-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
          {data?.map((p) => {
            return (
              <ProjectCard
                key={p.id}
                images={[
                  {
                    url: p.image,
                    type: "website"
                  },
                  {
                    url: ride,
                    type: "website"
                  },
                  {
                    url: p.image,
                    type: "website"
                  }
                ]}
                link={p.link}
                description={p.description}
              />
            );
          })}
          
          {/* Embedding GitHub ReadMe Cards */}
          <div className="w-full max-w-sm p-4 rounded-md shadow-md">
            <h3 className="text-xl text-black dark:text-white font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://github.com/andi-gech/Quizly"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=andi-gech&repo=Quizly"
                  alt="Differ Repo"
                  className="rounded-md"
                />
              </a>
              <a
                href="https://github.com/andi-gech/ride-clone"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=andi-gech&repo=ride-clone"
                  alt="Simple SQLite Repo"
                  className="rounded-md"
                />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
