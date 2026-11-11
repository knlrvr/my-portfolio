import type { Metadata } from "next"
import PageTop from "../components/page-top"
import Section from "../components/section"
import ProjectCard from "../components/project-card"
import { Reveal } from "../components/effects/reveal"
import { projects } from "../lib/projects"

export const metadata: Metadata = {
  title: 'Kane Lariviere | Projects',
  description: 'Things I’ve built, shipped, and tinkered with.',
}

export default function ProjectsPage() {
  return (
    <main>
      <PageTop
        title="Side Projects"
        description="Things I’ve built, shipped, and tinkered with."
        back={false}
      />

      {/* Same cards as the home section; live/source links live on each project's page. */}
      <Section index="001" label="all projects.">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.16 * (i + 1)}>
            <ProjectCard project={project} first={i === 0} last={i === projects.length - 1} />
          </Reveal>
        ))}
      </Section>
    </main>
  )
}
