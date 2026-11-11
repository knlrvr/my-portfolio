import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { Reveal } from "./effects/reveal";

export interface PageMeta {
    label: string
    value: React.ReactNode
}

/**
 * Subpage hero. Mirrors the home hero: title, smaller muted description, and
 * an optional label-over-value meta row under a hairline. `children` render
 * inside the (relative) hero, e.g. a post's sticker.
 */
export default function PageTop({
    title,
    description,
    back,
    backHref,
    meta,
    children,
}: {
    title: string
    description: string
    back: boolean
    backHref?: string
    meta?: PageMeta[]
    children?: React.ReactNode
}) {
    return (
        <section className="relative pt-12 pb-14 sm:px-4 sm:pt-28">
            {back && backHref && (
                // Absolutely positioned in the top padding so it doesn't push the
                // title down; titles start at the same height on every page.
                <Reveal delay={0.04} className="absolute top-4 left-0 sm:top-12 sm:left-4">
                    <Link
                        href={backHref}
                        className="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-tighter text-neutral-500 transition-colors duration-150 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        <LuArrowLeft className="transition-transform duration-150 group-hover:-translate-x-0.5" />
                        back
                    </Link>
                </Reveal>
            )}

            <Reveal delay={0.08}>
                <h1 className="text-[1.875rem] leading-tight font-normal tracking-tight sm:text-[2.25rem]">
                    {title}
                </h1>
            </Reveal>

            <Reveal delay={0.16}>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed tracking-tight text-neutral-500">
                    {description}
                </p>
            </Reveal>

            {meta && meta.length > 0 && (
                <Reveal delay={0.24}>
                    <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-(--rule) pt-6 sm:grid-cols-4">
                        {meta.map((m) => (
                            <MetaItem key={m.label} {...m} />
                        ))}
                    </dl>
                </Reveal>
            )}

            {children}
        </section>
    )
}

/** Label-over-value pair. Also used by the post page's side rail. */
export function MetaItem({ label, value }: PageMeta) {
    return (
        <div className="flex flex-col gap-1.5">
            <dt className="font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                {label}
            </dt>
            <dd className="text-xs font-medium tracking-tight">{value}</dd>
        </div>
    )
}
