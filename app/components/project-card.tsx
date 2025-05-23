import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  date: string;
  url?: string;
}

export default function ProjectCard({ img, title, desc, date, url}: ProjectCardProps) {
    return (
      <Link key={title} className="flex flex-col gap-2 text-sm group"
        href={`work/${url}`}>
        <Image
          src={img}
          alt={`${title}'s image`}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        <p className="border-l-2 border-neutral-500 font-light text-neutral-500 pl-2 text-xs my-1">{date}</p>
        <p className="font-medium tracking-tight">{title}</p>
        <p className="dark:text-neutral-300 blog">{desc}</p>
        
        <span className="text-neutral-400 text-xs underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500 dark:decoration-neutral-500 dark:group-hover:decoration-neutral-300 transition-colors duration-150 mt-4">Learn More</span>
      </Link>
    )
}

