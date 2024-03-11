import Link from "next/link";

const LINKS = [
  { url: "/about", title: "Apie Mus" },
  { url: "/projects", title: "Projektai" },
  // { url: "/contact", title: "Susisiekti" },
];

function Links({ offMobileMenu }) {
  return (
    <>
      {LINKS.map((link, index) => (
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
