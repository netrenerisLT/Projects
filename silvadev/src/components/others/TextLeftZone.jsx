import React from "react";

export default function TextLeftZone({ children, styles }) {
  return <p className={`textParagraph md:absolute flex ${styles}`}>{children}</p>;
}
