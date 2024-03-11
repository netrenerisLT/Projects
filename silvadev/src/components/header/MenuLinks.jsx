import Link from "next/link";

const LINKS = [
  { url: "/about", title: "Apie Mus" },
  { url: "/projects", title: "Projektai" },
  { url: "/contact", title: "Susisiekti" },
];

export default function MenuLinks({ offMobileMenu }) {
  return (
    <>
      {LINKS.map((link) => (
        <li onClick={offMobileMenu} key={link.title}>
          <Link href={link.url} key={link.title} className="text-colWhite">
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
}
