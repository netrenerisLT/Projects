"use client";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useState, useTransition } from "react";
import { useRouter, usePathname } from "../../navigation";
import ArrowIcon from "../others/ArrowIcon";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);

  function onSelectChange(event) {
    setOpen(false);
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        { pathname, params },
        { locale: nextLocale, scroll: false }
      );
    });
  }
  return (
    // <label>
    //   <select
    //     className=" "
    //     defaultValue={defaultValue}
    //     disabled={isPending}
    //     onChange={onSelectChange}
    //   >
    //     {children}
    //   </select>
    // </label>

    <label className="flex flex-col w-20 mx-auto relative capitalize ">
      <button
        className="textParagraph hover:ring-1 uppercase hover:ring-colWhite focus:outline-none px-5 py-2.5 text-center "
        type="button"
        onClick={() => setOpen(!open)}
      >
        {defaultValue}
      </button>
      {open && (
        <div
          onClick={onSelectChange}
          className="z-10 absolute top-full left-0 bg-colWhite textParagraph text-colBlack w-full text-center ring-1 ring-colWhite"
        >
          {children}
        </div>
      )}
    </label>
  );
}
