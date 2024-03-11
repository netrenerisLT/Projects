import Links from "./Links";

export default function MenuLinks({ offMobileMenu, navLinksMotion }) {
  return (
    <div className="max-md:hidden col-span-2 md:col-end-7 lg:col-end-9 xl:col-end-11 2xl:col-end-13 text-colWhite">
      <ul className="grid grid-cols-2">
        <Links />
      </ul>
    </div>
  );
}
