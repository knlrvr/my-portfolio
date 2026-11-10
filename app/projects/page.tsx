import type { Metadata } from "next"
import PageTop from "../components/page-top"
import ProjectCard from "../components/project-card"
import { Reveal } from "../components/effects/reveal"
import { projects } from "../lib/projects"

export const metadata: Metadata = {
  title: 'Kane Lariviere | Projects',
  description: 'Things I’ve built, shipped, and tinkered with.',
}

export default function ProjectsPage() {
  return (
    <div className="max-w-md mx-auto">
      <PageTop
        title="Side Projects"
        description="Things I’ve built, shipped, and tinkered with."
        back={false}
      />

      <main>
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.16 * (i + 1)}>
            <ProjectCard project={project} divider={i < projects.length - 1} />
          </Reveal>
        ))}
      </main>
    </div>
  )
}
