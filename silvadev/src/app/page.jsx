import Button from "@/components/Button";
import Services from "@/components/services/Services";
import Image from "next/image";
import Parralax from "../components/ParralaxText";

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
      <div className="flex flex-col mt-40">
          <h2 className="textH2Header">
            Patyrę dizaineriai ir programuotojai, nekantraujantys paversti Jūsų
            idėjas realybe
          </h2>

        <div className="mt-40">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Homepage;
