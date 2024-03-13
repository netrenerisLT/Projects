import React from "react";

export default function H2Title({ styles, children }) {
  return <h2 className={`textH2 mb-32 ${styles}`}>{children}</h2>;
}
