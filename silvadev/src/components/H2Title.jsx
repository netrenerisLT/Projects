import React from "react";

export default function H2Title({ styles, children }) {
  return <h2 className={`textH2 mb-16 md:mb-32 z-10 ${styles}`}>{children}</h2>;
}
