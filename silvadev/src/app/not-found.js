import Link from "next/link";
import ArrowSvg from "../components/ArrowSvg";

export default function NotFound() {
  return (
    <div>
      <h1 className="textH1">Puslapis nerastas</h1>
      <div>
        <Link href="/" className="textParagraph capitalize flex items-center">
          <span className="rotate-180 mr-4">
            <ArrowSvg />
          </span>
          Grįžti į pagrindinį
        </Link>
      </div>
    </div>
  );
}
