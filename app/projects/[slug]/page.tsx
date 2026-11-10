import Image from "next/image"
import { notFound } from "next/navigation"
import { LuArrowUpRight } from "react-icons/lu"

import PageTop from "@/app/components/page-top"
import { Reveal } from "@/app/components/effects/reveal"
import { projects, getProject } from "@/app/lib/projects"

type Params = Promise<{ slug: string }>

export const generateStaticParams = async () => {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return

  return {
    title: `Kane Lariviere | ${project.title}`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <section className="pb-6 max-w-md mx-auto">
      <PageTop
        title={project.title}
        description={project.description}
        back={true}
        backHref="/projects"
      />

      {project.image && (
        <Reveal delay={0.16}>
          {/* Matches the prose-img sizing in post-content.tsx — wider than the column at md+ */}
          <div className="relative aspect-video w-full md:-mx-6 md:w-[calc(100%+3rem)] overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover rounded-sm"
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={0.24}>

        <div className="flex flex-col gap-4 text-sm text-neutral-700 dark:text-neutral-300 blog">
          {project.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {(project.href || project.repo) && (
          <div className="flex gap-6 mt-8 font-mono text-[11px]">
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1">
                <span className="underline underline-offset-2 decoration-neutral-500 group-hover:decoration-neutral-400 dark:group-hover:decoration-neutral-600 transition-colors duration-150">live</span>
                <LuArrowUpRight />
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1">
                <span className="underline underline-offset-2 decoration-neutral-500 group-hover:decoration-neutral-400 dark:group-hover:decoration-neutral-600 transition-colors duration-150">source</span>
                <LuArrowUpRight />
              </a>
            )}
          </div>
        )}
      </Reveal>
    </section>
  )
}
