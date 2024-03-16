"use client";
import { useState } from "react";
import ArrowIcon from "@/components/others/ArrowIcon";
import TextLeftZone from "@/components/others/TextLeftZone";

const Item = ({ title, index, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="border-y-[1px] border-colJetBlack">
      <button
        type="button"
        className="flex items-center text-left justify-between w-full px-4  h-28 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex gap-8">
          <h3 className="textH3">{index}</h3>
          <h3 className="textH3">{title}</h3>
        </span>
        <span
          className={`w-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <ArrowIcon />
        </span>
      </button>
      {isOpen && (
        <div className="max-lg:pl-16 lg:pl-20 max-w-[90%] ">
          <p className="textParagraph pb-10">{children}</p>
        </div>
      )}
    </li>
  );
};

export default function Accordion({ information, title }) {
  return (
    <>
      <ul className="max-sm:-mb-[5.5rem] md:-mb-4 w-[100% - 5%] md:w-full max-sm:-ml-[28%] max-sm:z-40 bg-colBlack relative">
        {title && (
          <TextLeftZone styles="h-28 items-center md:items-start px-4 max-sm:border-colJetBlack max-sm:border-t-[1px] md:-ml-[33%] ">
            {title}
          </TextLeftZone>
        )}

        {information.map((item, index) => (
          <Item key={item.title} index={index + 1} title={item.title}>
            {item.description}
          </Item>
        ))}
      </ul>
    </>
  );
}
