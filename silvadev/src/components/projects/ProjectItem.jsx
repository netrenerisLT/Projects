import Image from "next/image";
import Button from "../others/Button";
import { Link } from "@/navigation";

export default function ProjectItem({
  title,
  slug,
  coverImage,
  summary,
  withSummary,
}) {
  return (
    <article className="flex gap-y-4 flex-col h-fit w-full ">
      <Link prefetch={true} href={`/projects/${slug}`}>
        <div className="h-full aspect-video relative w-full">
          <Image
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            src={coverImage}
            alt={title}
            priority
            fill
          />
        </div>
      </Link>

      <div
        className={`flex justify-between items-start ${
          summary && "flex-col md:flex-row"
        }`}
      >
        <div className="textParagraph px-4 md:basis-2/3">
          <p>{title}</p>
          {withSummary && <p className="pt-4 mb-4">{summary}</p>}
        </div>
        <span className="ml-4">
          <Button prefetch={true} href={`/projects/${slug}`}>
            Daugiau
          </Button>
        </span>
      </div>
    </article>
  );
}
