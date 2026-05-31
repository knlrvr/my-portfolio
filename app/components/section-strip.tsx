interface SectionStripProps {
  label: string
  number: string
}

export default function SectionStrip({ label, number }: SectionStripProps) {
  return (
    <div className="flex items-center gap-5 py-4 border-b border-t border-neutral-200 dark:border-neutral-800 mt-12">
      <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-neutral-300 dark:bg-neutral-700" />
      <span className="font-mono text-[11px] text-orange/80">
        {number}
      </span>
    </div>
  )
}