"use client";
import Link from "next/link";
// import ArrowIcon from "./ArrowIcon";
import ArrowIcon from "@/components/others/ArrowIcon";

export default function Button({
  children,
  styles,
  reverse,
  prefetch,
  href = "",
}) {

  console.log(children)

  return (
    <button>
      <Link
        prefetch={prefetch}
        href={href}
        className={`${styles} textParagraph capitalize flex items-center z-40 ${
          !reverse && "flex-row-reverse"
        }`}
      >
        <span className={`${reverse ? "rotate-180 mr-4" : "ml-4"}`}>
          <ArrowIcon/>
        </span>
        {children}
      </Link>
    </button>
  );
}
