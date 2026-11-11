import Image from "next/image"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import type { Project } from "../lib/projects"

/** Project in a list: cover at its own ratio, then title + description. Same row rhythm as PostRow. */
export default function ProjectCard({
    project,
    first,
    last,
}: {
    project: Project
    first: boolean
    last: boolean
}) {
    const cover = project.images?.[0]

    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`
                group flex flex-col gap-4
                ${first ? 'pb-8' : 'py-8'}
                ${last ? '' : 'border-b border-(--rule)'}
            `}
        >
            {cover && (
                <div
                    style={{ aspectRatio: `${cover.width} / ${cover.height}` }}
                    className="relative w-full overflow-hidden border border-(--rule)"
                >
                    <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        sizes="(min-width: 640px) 540px, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                </div>
            )}

            <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium tracking-tighter transition-colors duration-150 group-hover:text-neutral-400 dark:group-hover:text-neutral-500">
                        {project.title}
                    </span>
                    <LuArrowRight className="shrink-0 -translate-x-1 text-neutral-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <p className="blog max-w-md text-[13px] text-neutral-600 dark:text-neutral-400">
                    {project.description}
                </p>
            </div>
        </Link>
    )
}
