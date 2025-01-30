import Image from "next/image";
import Link from "next/link";
import { LuLink } from "react-icons/lu";

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
        <p className="text-neutral-500">{desc}</p>
        
        <span className="text-neutral-500 text-xs underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500 transition-colors duration-150 mt-4">Learn More</span>
      </Link>
    )
}