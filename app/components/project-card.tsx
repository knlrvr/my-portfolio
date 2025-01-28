import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface ProjectCardProps {
    title: string;
    desc: string;
    date: string;
    url?: string;
}

export default function ProjectCard({ title, desc, date, url}: ProjectCardProps) {
    return (
      <Link key={title} className="flex flex-col text-sm group"
        href={`work/${url}`}>
        <p className="border-l-2 border-neutral-500 font-light text-neutral-500 pl-2 text-xs my-1">{date}</p>
        <p className="font-medium tracking-tight">{title}</p>
        <p className="text-neutral-500">{desc}</p>
        
        <span className="text-neutral-500 text-xs underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500 transition-colors duration-150 mt-4">Learn More</span>
      </Link>
    )
}