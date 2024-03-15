import ServicesFull from "@/components/about/services/ServicesFull";
import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
import H2Title from "@/components/others/H2Title";

export default function page() {
  return (
      <div className="blockStyle">
        <H1Title styles=" -ml-[30%] max-sm:pr-4">Apie Mus</H1Title>
        <H2Title styles="max-sm:-ml-[28%] text-left normal-case max-sm:pr-4">
          Mūsų ekspertų komanda daugiau nei 6 metus kuria naudotojui draugiškas
          svetaines, kurios yra ne tik vizualiai patrauklios ir įtraukiančios,
          bet ir palieka ilgalaikį įspūdį. Nuo idėjos iki paleidimo – esame čia,
          kad įgyvendintume tavo projekto viziją ir sukurtume kokybišką ir
          profesionaliai atrodančią svetainę.
        </H2Title>
        <ServicesFull />
        <Accordion />
      </div>
  );
}
