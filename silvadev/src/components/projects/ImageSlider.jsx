"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ projectImages, coverImage, title = "" }) {
  const [active, setActive] = useState({
    coverImage: coverImage,
    title: title,
  });
  return (
    <div className=" grid w-full h-full gap-4 md:gap-8 pl-0 max-sm:-ml-[26%] max-sm:w-[124%] max-sm:pr-4 grid-rows-2 lg:grid-cols-6 lg:grid-rows-5">
      <div className="aspect-video relative h-auto w-full row-span-2 lg:row-span-5 col-span-5">
        <Image
          className="aspect-video object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          src={active.coverImage}
          alt={active.title}
          priority
          fill
        />
      </div>
      <div className="grid max-lg:grid-cols-5 gap-4 row-span-1 lg:row-span-5 col-span-5 lg:col-span-1">
        {projectImages.map((image, index) => (
          <div key={index + image.title} className="relative aspect-video ">
            <Image
              className="aspect-video cursor-pointer object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              onClick={() =>
                setActive({ coverImage: image.imageUrl, title: image.title })
              }
              src={image.imageUrl}
              alt={image.title}
              fill
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
