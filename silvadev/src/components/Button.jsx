"use client";
import Link from "next/link";
import ArrowSvg from "./ArrowSvg";

export default function Button({ onClick, children, styles, reverse, href = "" }) {
  return (
    <button>
      <Link
        href={href}
        className={`${styles} textParagraph capitalize flex items-center ${!reverse && "flex-row-reverse"}`}
      >
        <span className={`${reverse ? "rotate-180 mr-4" : "ml-4"}`}>
          <ArrowSvg />
        </span>
        {children}
      </Link>
    </button>
  );
}
