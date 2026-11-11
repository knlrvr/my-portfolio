import Image from "next/image"
import { notFound } from "next/navigation"

import PageTop from "@/app/components/page-top"
import Section from "@/app/components/section"
import ProjectLinks from "@/app/components/project-links"
import { Reveal } from "@/app/components/effects/reveal"
import { projects, getProject, type ProjectImage } from "@/app/lib/projects"

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

/** Image edge to edge within the frame at its own ratio, hairline above. */
function FrameImage({ image, priority = false }: { image: ProjectImage; priority?: boolean }) {
  return (
    <div className="-mx-6 border-t border-(--rule)">
      <div style={{ aspectRatio: `${image.width} / ${image.height}` }} className="relative w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const [cover, ...gallery] = project.images ?? []
  const hasLinks = Boolean(project.href || project.repo)

  return (
    <main>
      <PageTop
        title={project.title}
        description={project.description}
        back={true}
        backHref="/projects"
        meta={hasLinks ? [{ label: "Links", value: <ProjectLinks project={project} /> }] : undefined}
      />

      {cover && (
        <Reveal delay={0.24}>
          <FrameImage image={cover} priority />
        </Reveal>
      )}

      <Section index="001" label="overview.">
        <Reveal delay={0.16}>
          <div className="blog flex max-w-md flex-col gap-4 text-[13px] text-neutral-700 dark:text-neutral-300">
            {project.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      {gallery.map((image) => (
        <Reveal key={image.src} delay={0.08}>
          <FrameImage image={image} />
        </Reveal>
      ))}
    </main>
  )
}
