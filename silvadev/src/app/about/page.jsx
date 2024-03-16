import ServicesFull from "@/components/about/services/ServicesFull";
import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
import H2Title from "@/components/others/H2Title";

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

export default function page() {
  return (
      <div className="blockStyle pl-0">
        <H1Title styles=" -ml-[30%] max-sm:pr-4 pl-4">Apie Mus</H1Title>
        <H2Title styles="max-sm:-ml-[28%] text-left normal-case max-sm:pr-4 pl-4">
          Mūsų ekspertų komanda daugiau nei 6 metus kuria naudotojui draugiškas
          svetaines, kurios yra ne tik vizualiai patrauklios ir įtraukiančios,
          bet ir palieka ilgalaikį įspūdį. Nuo idėjos iki paleidimo – esame čia,
          kad įgyvendintume tavo projekto viziją ir sukurtume kokybišką ir
          profesionaliai atrodančią svetainę.
        </H2Title>
        <ServicesFull />
        <Accordion information={HOWWEWORK} title="Kaip dirbame" />
      </div>
  );
}
