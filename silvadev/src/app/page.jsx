import Image from "next/image";
import Parralax from "../components/others/ParralaxText";
import ServicesList from "../components/about/services/ServicesSummary";
import H2Title from "../components/H2Title";
import H1Title from "../components/H1Title";

const Homepage = () => {
  const blockStyle =
    "relative flex flex-col mt-40 py-5 max-sm:pl-1 md:p-4 md:pr-12 xl:pr-24 2xl:pr-36 w-full";
  return (
    <>
      <div className="h-screen flex flex-col justify-end">
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          className="object-contain"
        />
        <Parralax />
      </div>
      <div className={blockStyle}>
        <H1Title styles=" -ml-[30%] max-sm:pr-4">Paslaugos</H1Title>
        <H2Title styles="max-sm:-ml-[28%] text-left normal-case max-sm:pr-4">
          Su daugiau nei 6 metų patirtimi mūsų komanda kuria ne tik vizualiai
          patrauklias, bet ir verslą auginančias interneto svetaines.
          Susisiekime ir aptarsime tavo svetainės vizijos įgyvendinimą!
        </H2Title>
        <ServicesList />
      </div>
      <div className={blockStyle}>
        <H1Title styles=" max-sm:-ml-[30%] max-sm:pr-4">
          Atrinkti darbai
        </H1Title>
      </div>
    </>
  );
};

export default Homepage;
