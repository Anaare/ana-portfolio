import Link from "next/link";
import Image from "next/image";
import macbook from "../../public/images/macbook.png";
import StackContainer from "./StackContainer";

export default function ProjectCard({
  src,
  alt,
  description,
  href,
  projectName,
  stack,
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-80 shrink-0">
          <Image
            src={macbook}
            alt="MacBook mockup"
            className="w-full h-auto"
            priority
          />
          <Image
            src={src}
            alt={alt}
            className="absolute top-[75px] left-[33px] w-[250px] h-[160px] rounded-md object-cover shadow-md"
            priority
          />
        </div>

        <div className="flex flex-col gap-2 max-w-md">
          <Link
            href={href}
            className="text-lg font-semibold text-primary hover:underline"
          >
            {projectName}
          </Link>
          <p className="text-base leading-relaxed">{description}</p>
          <StackContainer stack={stack} />
        </div>
      </div>
    </div>
  );
}
