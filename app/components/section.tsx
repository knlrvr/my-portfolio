import Link from "next/link"
import { LuArrowRight } from "react-icons/lu"
import { Reveal } from "./effects/reveal"

interface SectionProps {
  id?: string
  index: string
  label: string
  /** Optional link shown under the label, e.g. "All posts". */
  more?: { label: string; href: string }
  /** Tighter vertical padding, for pages with many short sections. */
  dense?: boolean
  children: React.ReactNode
}

/**
 * Page section: a full-width hairline on top, a narrow label rail on the
 * left (sticky on desktop) and the content on the right. Used on every page.
 */
export default function Section({ id, index, label, more, dense, children }: SectionProps) {
  return (
    <section id={id} className="-mx-6 border-t border-(--rule)">
      <div className={`grid grid-cols-[minmax(0,1fr)] gap-8 px-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-0 sm:px-10 ${dense ? "py-12 sm:py-14" : "py-16 sm:py-20"}`}>
        <Reveal delay={0.08} className="sm:sticky sm:top-10 sm:self-start">
          <div className="flex items-baseline justify-between sm:flex-col sm:gap-1.5">
            <div className="flex items-baseline gap-2 sm:flex-col sm:gap-1.5">
              <span className="font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                [ {index} ]
              </span>
              <h2 className="text-xs font-medium tracking-tight">{label}</h2>
            </div>
            {more && (
              <Link
                href={more.href}
                className="group flex items-center gap-1 font-mono text-[11px] tracking-tighter text-neutral-500 transition-colors duration-150 hover:text-neutral-900 sm:mt-4 dark:hover:text-neutral-100"
              >
                {more.label}
                <LuArrowRight className="transition-transform duration-150 group-hover:translate-x-px" />
              </Link>
            )}
          </div>
        </Reveal>

        <div>{children}</div>
      </div>
    </section>
  )
}
