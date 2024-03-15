import Image from "next/image";
import Link from "next/link";
import Button from "../others/Button";

export default function ProjectItem({
  title,
  slug,
  projectUrl,
  projectType,
  clientName,
  coverImage,
  projectImages,
  summary,
  keyInfo,
}) {
  return (
    <article className="flex flex-col justify-end  h-full w-full relative">
      <Image
        src={coverImage}
        alt={title}
        fill
        className="aspect-video max-h-[85%] h-auto max-w-full object-cover object-center"
      />
      <div className="flex justify-between items-center">
        <p className="textParagraph px-4">{title}</p>
        <Button href={`/projects/${slug}`}>Daugiau</Button>
      </div>
    </article>
  );
}
