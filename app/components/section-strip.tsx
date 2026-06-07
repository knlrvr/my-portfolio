import { Reveal } from "./effects/reveal"

interface SectionStripProps {
  label: string
  number: string
}

export default function SectionStrip({ label, number }: SectionStripProps) {
  return (
    <Reveal delay={0.08}>
      <div className="py-0.5 border-b border-[#F2F0E9] dark:border-[#F2F0E9]/5">
        <div className="flex items-end gap-2 py-3 mt-12 border-b border-[#F2F0E9] dark:border-[#F2F0E9]/5">
          <span className="font-medium tracking-tighter text-[11px] bg-olive/30 dark:bg-orange/20 text-olive dark:text-orange px-2 py-1">
            {number}
          </span>
          <span className="text-[11px] font-medium tracking-tighter text-olive dark:text-orange/80 whitespace-nowrap">
            {label}.
          </span>
        </div>
      </div>
    </Reveal>
  )
}

export function SectionStripSm({ label, number }: SectionStripProps) {
  return (
    <Reveal delay={0.08} key={number}>
      <div className="flex items-center gap-2 mt-12 mb-4">
        <span className="text-[11px] font-medium tracking-tighter text-olive dark:text-orange whitespace-nowrap">
          {label}.
        </span>
      </div>
    </Reveal>
  )
}