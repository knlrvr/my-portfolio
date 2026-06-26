import { Reveal } from "./effects/reveal"

interface SectionStripProps {
  label: string
  number: string
}

export default function SectionStrip({ label, number }: SectionStripProps) {
  return (
    <Reveal delay={0.08}>
      <div className="mt-24 py-0.5">
        <span className="text-[11px] font-mono tracking-tighter text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
          [&nbsp;{label}.&nbsp;]
        </span>
      </div>
    </Reveal>
  )
}

export function SectionStripSm({ label, number }: SectionStripProps) {
  return (
    <Reveal delay={0.08} key={number}>
      <div className="flex items-center gap-2 mt-14 py-0.5">
        <span className="text-[11px] font-mono tracking-tighter text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
          [&nbsp;{label}.&nbsp;]
        </span>
      </div>
    </Reveal>
  )
}