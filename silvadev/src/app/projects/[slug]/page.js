import Accordion from "@/components/about/accordion/Accordion";
import H1Title from "@/components/others/H1Title";
import TextLeftZone from "@/components/others/TextLeftZone";
import ImageSlider from "@/components/projects/ImageSlider";
import GetData from "@/firebase/getData";

const project = {
  title: "Dobis ir Aurelija",
  slug: "dobis-nuostabus",
  projectUrl: "https:www.google.com",
  projectType: "El. parduotuve",
  clientName: "Dobiukas maziukas",
  coverImage: "/projects/dobis.jpg",
  projectImages: [
    {
      title: "Dobis",
      imageUrl: "/projects/dobis.jpg",
    },
    {
      title: "Dobis",
      imageUrl: "/projects/dobis.jpg",
    },
    {
      title: "Dobis",
      imageUrl: "/projects/dobis.jpg",
    },
  ],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  keyInfo:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

export default function page({ params }) {
  return (
    <div className="blockStyle pl-0">
      <div className="z-30 w-full">
        <H1Title styles=" -ml-[28%] max-sm:pr-4 md:mb-16">
          {project.title}
        </H1Title>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col justify-between items-end md:items-start -ml-[25%] md:-ml-[29%] md:max-w-[25%] max-sm:mb-8">
            <p className="textParagraph text-left max-sm:mr-4 max-sm:pb-4">
              {project.summary}
            </p>
            <a
              className="textBase text-colWaterLeaf max-sm:mr-4"
              href={`${project.projectUrl}`}
              target="_blank"
            >
              Nuoroda į projektą
            </a>
          </div>
          <ImageSlider />
        </div>
      </div>

      {/* <Accordion /> */}
    </div>
  );
}
