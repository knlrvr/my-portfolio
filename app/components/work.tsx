
import Image from "next/image"
import Section from "./section"
import { Reveal } from "./effects/reveal"

interface WorkEntry {
  index: string
  years: string
  company: string
  img: string
  role: string
  featured: boolean
  description: string
}

const entries: WorkEntry[] = [
  {
    index: '01',
    years: '2025 — Now',
    company: 'Rather Outdoors',
    featured: true,
    img: '/ro-logo.png',
    role: 'Software Engineer, QA & Automation',
    description: 'Building infrastructure & tools that help teams trust what they ship.',
  },
  {
    index: '02',
    years: '2022 — 25',
    company: 'eraWorks Studio',
    featured: false,
    img: '/era.png',
    role: 'Software Engineer + Product',
    description: 'Partnered with small to medium businesses on product direction & 0-to-1 development.',
  },
]

export default function Work() {
  return (
    <Section id="work" index="001" label="experience.">
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <Reveal key={entry.index} delay={0.16 * (i + 1)}>
            <div
              className={`
                flex flex-col gap-4
                ${i === 0 ? 'pb-8' : 'py-8'}
                ${i < entries.length - 1 ? 'border-b border-(--rule)' : ''}
              `}
            >
              {/* Company logo above company name */}
              <div className="flex size-8 items-center justify-center rounded-md border border-(--rule) bg-white dark:bg-(--frame)">
                <Image
                  src={entry.img}
                  alt=""
                  width={24}
                  height={24}
                  className="size-4 object-contain dark:invert"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium tracking-tighter">
                      {entry.company}
                    </p>
                    {entry.featured && (
                      <span className="rounded-sm bg-neutral-200/70 px-1.5 py-0.5 font-mono text-[0.625rem] font-bold uppercase text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        now
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                    {entry.years}
                  </span>
                </div>

                <p className="text-[13px] font-medium tracking-tight text-neutral-500">
                  {entry.role}
                </p>

                <p className="blog max-w-md text-[13px] text-neutral-600 dark:text-neutral-400">
                  {entry.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
