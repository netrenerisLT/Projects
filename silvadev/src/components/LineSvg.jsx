import React from "react";
import Image from "next/image";

function LineSvg() {
  return (
    // <Image src="/Line.svg" alt="Line path" height={10} width={600} />
    <svg
      className="absolute -z-10" 
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 0 L0 0 L0 200 Z" stroke="#344434" stroke-width="0.3" />
    </svg>
  );
}

export default LineSvg;
