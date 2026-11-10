import Image from "next/image"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import type { Project } from "../lib/projects"

export default function ProjectCard({
    project,
    divider = false,
}: {
    project: Project
    divider?: boolean
}) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`
                group flex flex-col gap-4 py-8
                ${divider ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}
            `}
        >
            {project.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-neutral-200 dark:border-neutral-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 448px) 100vw, 448px"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>
            )}

            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-tighter group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-150">
                        {project.title}
                    </span>
                    <span className="pt-1 shrink-0 ml-4 group-hover:translate-x-px group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-200">
                        <LuArrowRight />
                    </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm blog">
                    {project.description}
                </p>
            </div>
        </Link>
    )
}
