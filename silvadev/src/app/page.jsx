import Image from "next/image";
import Parralax from "../components/others/ParralaxText";
import ServicesList from "../components/about/services/ServicesList";
import H2Title from "../components/H2Title";

const Homepage = () => {
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
      <div className=" relative flex flex-col mt-40 py-5 max-sm:pr-4 max-sm:pl-1 md:p-4 md:pr-12 xl:pr-24 2xl:pr-36 w-full">
        <H2Title styles="text-left normal-case">
          Mūsų ekspertų komanda daugiau nei 6 metus kuria naudotojui draugiškas
          svetaines, kurios yra ne tik vizualiai stulbinančios ir įtraukiančios,
          bet ir palieka ilgalaikį įspūdį. Įgyvendinsime tavo projekto viziją ir
          sukursime profesionaliai atrodančią ir pasitikėjimo vertą svetainę.
        </H2Title>
        <ServicesList />
      </div>
    </>
  );
};

export default Homepage;
