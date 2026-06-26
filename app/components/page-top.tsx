import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { Reveal } from "./effects/reveal";


export default function PageTop({ 
    title,
    description,
    date,
    back,
    backHref,
}:{
    title: string
    description: string
    date?: string
    back: boolean
    backHref?: string,
}) {
    return (
        <Reveal delay={0.08}>
            <div className="mt-28 mb-8 relative">
                {back === true && backHref && (
                    <Link href={backHref}
                        className="group absolute -top-8 text-xs flex items-center gap-1"
                    >
                        <span className="font-mono text-[11px] underline underline-offset-2 decoration-neutral-500 group-hover:decoration-neutral-400 dark:group-hover:decoration-neutral-600 transition-colors duration-150">back</span>
                    </Link>
                )}

                <h1 className="text-4xl font-medium tracking-tighter">{title}</h1>
                <p className="py-2 text-sm font-medium tracking-tighter text-neutral-600 dark:text-neutral-400">{description}</p>
                {date && (
                    <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-500/20 px-2 py-1">{date}</span>
                )}
            </div>
        </Reveal>
    )
}