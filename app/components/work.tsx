import Image from "next/image"
import SectionStrip from "./section-strip"
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
    years: '2025 - Present',
    company: 'Rather Outdoors',
    featured: true,
    img: '/ro-logo.png',
    role: 'QA Automation Engineer',
    description: 'Building infrastructure & tools that help teams trust what they ship.',
  },
  {
    index: '02',
    years: '2022 - 25',
    company: 'eraWorks Studio',
    featured: false,
    img: '/era.png',
    role: 'Software Engineer + Product',
    description: 'Partnered with small to medium businesses on product direction & 0-to-1 development.',
  },
]

export default function Work() {
  return (
    <section id="work">
      <SectionStrip label="Experience" number="002" />

      {entries.map((entry, i) => (
        <Reveal key={entry.index} delay={0.16 * (i + 1)}>
          <div
            className={`
              flex flex-col gap-2
              py-8
              ${i < entries.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}
            `}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={entry.img}
                  alt={`${entry.company} logo`}
                  width={250}
                  height={250}
                  className="w-6 h-fit dark:invert"
                />
                <p className="text-sm font-medium tracking-tighter leading-none text-ink">
                  {entry.company}
                </p>
                {entry.featured && (
                  <span className="rounded-full ml-2 text-[0.625rem] font-mono uppercase font-bold bg-orange/20 text-orange px-3 py-1">
                    current
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                  <p className="text-sm font-medium tracking-tighter text-neutral-600 dark:text-neutral-400">
                    {entry.role}
                  </p>
                <span className="block text-[11px] tracking-tight uppercase text-neutral-400 dark:text-neutral-600">
                  {entry.years}
                </span>
              </div>
              <p className="text-sm text-neutral-500 blog">
                {entry.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}