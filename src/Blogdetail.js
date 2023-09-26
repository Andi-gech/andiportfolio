import React from "react";
import { useParams } from "react-router-dom";
import useFindBlogdetail from "./Hooks/useFindBlogdetail";

export default function Blogdetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFindBlogdetail(id);

  const imageUrl =
    "https://fastly.picsum.photos/id/623/200/300.jpg?hmac=2LlPuWimnDeGk-zZPKKgRVozFd3c-26BinXWcxfTtXo";

  const youtubeVideoUrl = "https://www.youtube.com/embed/VIDEO_ID_HERE";

  const blogContent = `
    <div class=" p-4 rounded-lg">
      <h1 class="text-4xl font-bold mb-4">Introduction to Python Programming</h1>
      <img src="${imageUrl}" alt="Python Programming Image" class="rounded-lg w-[400px] h-[200px] mb-4" />
      <p class="text-lg leading-relaxed">
        Python is a versatile and widely-used programming language known for its simplicity and  readability.
        It is an excellent choice for beginners and experienced developers alike.
      </p>
      <!-- Embed YouTube Video -->
      <iframe
        width="560"
        height="315"
        src="${youtubeVideoUrl}"
        title="YouTube Video"
        class="mb-4"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <p class="text-lg leading-relaxed">
        Python's elegant syntax allows developers to write clear and concise code, making it easy to
        understand and maintain. It supports a wide range of libraries and frameworks, making it suitable
        for a variety of applications, including web development, data analysis, machine learning, and more.
      </p>
      <h2 class="text-2xl font-bold mt-8">Why Choose Python?</h2>
      <p class="text-lg leading-relaxed">
        Python's popularity has grown significantly in recent years, and for good reason. Some of the key
        advantages of Python include:
      </p>
      <ul class="list-disc ml-8 text-lg leading-relaxed">
        <li>Readability and simplicity</li>
        <li>Extensive library support</li>
        <li>Cross-platform compatibility</li>
        <li>Community-driven development</li>
      </ul>
      <h2 class="text-2xl font-bold mt-8">Getting Started with Python</h2>
      <p class="text-lg leading-relaxed">
        To start your journey in Python programming, you can download and install Python from the official
        website (<a href="https://www.python.org" class="text-blue-500 underline">python.org</a>). You'll also find a wealth of tutorials and documentation to help you learn
        and explore Python's capabilities.
      </p>
      <p class="text-lg leading-relaxed">
        Whether you're interested in building web applications, analyzing data, or diving into artificial
        intelligence, Python has the tools and resources to support your goals.
      </p>
    </div>
  `;

  return (
    <div className=" flex  dark:text-white text-black flex-1 flex-col items-center justify-center mb-10">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content }}
        className="flex flex-1 flex-col items-center justify-center sm:w-1/2  flex-wrap shadow-lg overflow-hidden  w-11/12 flex-shrink "
      ></div>
    </div>
  );
}
