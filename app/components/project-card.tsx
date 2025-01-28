import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface ProjectCardProps {
    title: string;
    date: string,
    desc: string;
    url?: string;
}

export default function ProjectCard({ title, date, desc, url}: ProjectCardProps) {
    return (
        <div className="group text-sm">
            <p className="font-medium tracking-tight">{title}</p>
            <p className="text-neutral-500">{desc}</p>

            <Link href={`https://${url}`} target="_blank"
                className="w-fit text-xs flex items-center mt-2 gap-2 group transition-colors duration-150"
            >
                <LuLink />
                <p className="text-xs underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">{url}</p>
            </Link>
        </div>
    )
}