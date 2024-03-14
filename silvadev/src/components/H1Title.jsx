import React from "react";

export default function H1Title({ styles, children }) {
  return <h1 className={`textH1 mb-16 md:mb-32 z-10 ${styles}`}>{children}</h1>;
}
