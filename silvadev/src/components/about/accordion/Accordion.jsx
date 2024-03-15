"use client";
import { useState } from "react";
import ArrowIcon from "@/components/others/ArrowIcon";
import TextLeftZone from "@/components/others/TextLeftZone";

const HOWWEWORK = [
  {
    title: "Poreikių išsiaiškinimas",
    description:
      "Mūsų pirmieji pokalbiai yra skirti išsiaiškinti tavo projekto tikslus, reikalingą funkcionalmą ir kitus reikalavimus. Po to galime suplanuoti aiškų darbų planą, nustatyti realius terminus, biudžetą ir kt.",
  },
  {
    title: "UX/UI",
    description:
      "Esant poreikiui, pradedame nuo eskizų kūrimo, kuriuose pateikiama bendra svetainės išvaizda ir pojūtis. Atsižvelgdami į poreikius, kuriame vizualiai patrauklias ir intuityvias sąsajas, kurios sustiprins tavo prekės ženklo tapatybę, skatiną vartotojų įsitraukimą ir augimą.",
  },
  {
    title: "Svetainės kūrimas",
    description:
      "Tavo idėja paverčiame realybe. Naudojame patikrintą kodavimo praktiką kuriant saugias sistemas. Kiekviena funkcija yra kruopščiai sukurta ir išbandyta, kad būtų užtikrinta svetainės kokybė.",
  },
  {
    title: "Testavimas",
    description:
      "Testai užtikrina, kad svetatnė yra stabili, naši ir saugi. Mes paprastai naudojame tikrus įrenginius, o ne emuliatorius, kad surinktume ir analizuotume bandomųjų vartotojų patirtį.",
  },
  {
    title: "Palaikymas ir priežiūra",
    description:
      "Svetainės neturi finišo linijos. Kai pateiksime sprendimą, vis dar būsime tavo žinioje dėl atnaujinimų ir suplanuotos priežiūros.",
  },
];

const Item = ({ title, index, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="border-y-[1px] border-colJetBlack">
      <button
        type="button"
        className="flex items-center text-left justify-between w-full px-4  h-28 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex gap-8">
          <h3 className="textH3">{index}</h3>
          <h3 className="textH3">{title}</h3>
        </span>
        <span
          className={`w-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <ArrowIcon />
        </span>
      </button>
      {isOpen && (
        <div className="max-lg:pl-16 lg:pl-20 max-w-[90%] ">
          <p className="textParagraph pb-10">{children}</p>
        </div>
      )}
    </li>
  );
};

export default function Accordion() {
  return (
    <>
      <ul className="max-sm:-mb-[5.5rem] md:-mb-4 w-[screen - 5%] md:w-full md:-ml-4 max-sm:-ml-[28%] max-sm:z-40 bg-colBlack relative">
        <TextLeftZone styles="h-28 items-center md:items-start px-4 max-sm:border-colJetBlack max-sm:border-t-[1px] md:-ml-[33%] ">
          Kaip dirbame
        </TextLeftZone>

        {HOWWEWORK.map((item, index) => (
          <Item key={item.title} index={index + 1} title={item.title}>
            {item.description}
          </Item>
        ))}
      </ul>
    </>
  );
}
