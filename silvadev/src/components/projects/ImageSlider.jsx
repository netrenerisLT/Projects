"use client";
import { useEffect, useState } from "react";

const data = [
  {
    title: "a",
    imageUrl:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "a",
    imageUrl:
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "a",
    imageUrl:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "a",
    imageUrl:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  },
  {
    title: "a",
    imageUrl:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  },
];

export default function ImageSlider({ imageUrl, title = "" }) {
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  // useEffect(() => {
  //   setActive(() => data.imageUrl);
  // }, [active]);

  return (
    <div className="grid w-full gap-4 md:gap-8 pl-0 max-sm:-ml-[26%] max-sm:w-fit max-sm:pr-4 lg:grid-cols-6 lg:grid-rows-5">
      <div className=" row-span-5 col-span-5">
        <img
          className="aspect-video h-auto w-full object-cover object-center"
          src={active}
          alt={title}
        />
      </div>
      <div className="grid max-lg:grid-cols-5 gap-4 row-span-5 col-span-5 lg:col-span-1">
        {data.map((image, index) => (
          <div key={index + image.title}>
            <img
              onClick={() => setActive(image.imageUrl)}
              src={image.imageUrl}
              className="aspect-video h-auto max-w-full cursor-pointer object-cover object-center"
              alt={image.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
