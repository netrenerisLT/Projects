import Link from "next/link";
import ArrowSvg from "../components/ArrowSvg";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-start justify-center">
      <h1 className="textH1 mb-10">Puslapis nerastas</h1>
      <div>
        <Link href="/" className="absolute left-10 bottom-10 textParagraph capitalize flex items-center">
          <span className="rotate-180 mr-4">
            <ArrowSvg />
          </span>
          Grįžti į pagrindinį
        </Link>
      </div>
    </div>
  );
}
