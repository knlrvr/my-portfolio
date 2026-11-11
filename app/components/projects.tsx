import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import Section from "./section"
import ProjectCard from "./project-card"
import { Reveal } from "./effects/reveal"
import { projects } from "../lib/projects"

const HOME_LIMIT = 3

export default function Projects() {
    const featured = projects.slice(0, HOME_LIMIT)

    return (
        <Section id="projects" index="003" label="projects.">
            {featured.map((project, i) => (
                <Reveal key={project.slug} delay={0.16 * (i + 1)}>
                    <ProjectCard project={project} first={i === 0} last={i === featured.length - 1} />
                </Reveal>
            ))}

            <Reveal delay={0.24}>
                <Link
                    href="/projects"
                    className="group mt-8 flex w-fit items-center gap-1.5 text-xs font-medium tracking-tighter transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500"
                >
                    All projects
                    <LuArrowRight className="transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
            </Reveal>
        </Section>
    )
}
