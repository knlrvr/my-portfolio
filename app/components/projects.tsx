import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import SectionStrip from "./section-strip"
import ProjectCard from "./project-card"
import { Reveal } from "./effects/reveal"
import { projects } from "../lib/projects"

const HOME_LIMIT = 3

export default function Projects() {
    const featured = projects.slice(0, HOME_LIMIT)

    return (
        <section id="projects">
            <SectionStrip label="side projects" number="04" />

            {featured.map((project, i) => (
                <Reveal key={project.slug} delay={0.16 * (i + 1)}>
                    <ProjectCard project={project} divider={i < featured.length - 1} />
                </Reveal>
            ))}

            <div className="py-8">
                <Reveal delay={0.24}>
                    <Link
                        href="/projects"
                        className="group flex gap-4 items-center w-fit text-xs pl-4 pr-2 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"
                    >
                        <span className="font-medium tracking-tighter">All Projects</span>
                        <div className="bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 rounded-full p-2">
                            <LuArrowRight className="group-hover:translate-x-px transition-transform duration-150" />
                        </div>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
