// import Link from "next/link";
import { Link } from "@/navigation";

function Links({ offMobileMenu, urlLinks }) {
  return (
    <>
      {urlLinks.map((link, index) => (
        <li onClick={offMobileMenu} key={link.title}>
          <Link href={link.url} key={link.title} prefetch>
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Links;
