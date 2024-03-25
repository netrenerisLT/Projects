"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRouter, usePathname } from "../../navigation";

export default function LocaleSwitcherSelect({ children, defaultValue }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function onSelectChange(event) {
    setOpen(false);
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale, scroll: false });
    // startTransition(() => {
    //   router.replace(
    //     { pathname, params },
    //     { locale: nextLocale, scroll: false }
    //   );
    // });
  }
  return (
    <label className="flex flex-col w-20 mx-auto relative capitalize ">
      <button
        className=" hover:ring-1 uppercase hover:ring-colBlack focus:outline-none px-5 py-2.5 text-center "
        type="button"
        onClick={() => setOpen(!open)}
      >
        {defaultValue}
      </button>
      {open && (
        <div
          onClick={onSelectChange}
          className="z-10 absolute top-full left-0 bg-colWhite text-colBlack w-full text-center ring-1 ring-colWhite"
        >
          {children}
        </div>
      )}
    </label>
  );
}
