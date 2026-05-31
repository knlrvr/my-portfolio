import { Reveal } from "./effects/reveal"

interface SectionStripProps {
  label: string
  number: string
}

export default function SectionStrip({ label, number }: SectionStripProps) {
  return (
    <Reveal delay={0.08}>
      <div className="flex items-center gap-2 py-4 border-b border-t border-neutral-200 dark:border-neutral-800 mt-12">
        <span className="font-medium tracking-tighter text-[11px] bg-orange/20 text-orange px-2 py-1">
          {number}
        </span>
        <span className="text-[9px] font-medium tracking-tighter uppercase text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
          {label}
        </span>
      </div>
    </Reveal>
  )
}

export function SectionStripSm({ label, number }: SectionStripProps) {
  return (
    <Reveal delay={0.08} key={number}>
      <div className="flex items-center gap-2 mt-12 mb-4">
        <span className="text-[11px] font-medium tracking-tighter text-orange whitespace-nowrap">
          {label}.
        </span>
      </div>
    </Reveal>
  )
}