import Image from "next/image";
import Link from "next/link";
import Button from "../others/Button";

export default function ProjectItem({
  title,
  slug,
  coverImage,
}) {
  return (
    <article className="flex flex-col justify-end  h-full w-full relative">
      <Image
        className="aspect-video max-h-[85%] h-auto max-w-full object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        src={coverImage}
        alt={title}
        priority
        fill

      />
      <div className="flex justify-between items-center">
        <p className="textParagraph px-4">{title}</p>
        <Button href={`/projects/${slug}`}>Daugiau</Button>
      </div>
    </article>
  );
}
