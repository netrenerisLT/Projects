import Button from "@/components/Button";
import Image from "next/image";


const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full ">
      {/* Image */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          className="object-contain"
        />
      </div>
      {/* Text */}
      <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2  gap-8 items-center justify-center">
        <h1 className="textHeader">Lorem ipsum dolor, sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          magni, sunt rem atque illum quo cumque ullam nobis ducimus nihil
          pariatur voluptatum porro minus?
        </p>
        <div className="flex max-sm:justify-center gap-4 w-full">
          <Button styles="btnLight" onClick={null}>
            Our projects
          </Button>
          <Button styles="btnDark" onClick={null}>
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
