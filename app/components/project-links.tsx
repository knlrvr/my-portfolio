import Link from "next/link"
import { LuArrowUpRight } from "react-icons/lu"
import type { Project } from "../lib/projects"

/** "Live ↗" and "Source ↗" as plain text links, for whichever the project has. */
export default function ProjectLinks({ project }: { project: Project }) {
    const links = [
        project.href && { label: "Live", href: project.href },
        project.repo && { label: "Source", href: project.repo },
    ].filter(Boolean) as { label: string; href: string }[]

    if (!links.length) return null

    return (
        <span className="flex items-center gap-5">
            {links.map((l) => (
                <Link
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xs font-medium tracking-tighter transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500"
                >
                    {l.label}
                    <LuArrowUpRight className="transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px" />
                </Link>
            ))}
        </span>
    )
}
