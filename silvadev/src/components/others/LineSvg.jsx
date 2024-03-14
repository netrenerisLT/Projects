import React from "react";
import Image from "next/image";

function LineSvg() {
  return (
    // <Image src="/Line.svg" alt="Line path" height={10} width={600} />
    <svg
      height="100%"
      width="2px"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 0 L0 0 L0 200 Z" stroke="#1F211C" strokeWidth="100" />
    </svg>
  );
}

export default LineSvg;
