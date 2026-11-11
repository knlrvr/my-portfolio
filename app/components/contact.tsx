import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { LuArrowUpRight } from "react-icons/lu"
import { Reveal } from "./effects/reveal"
import Section from "./section"

const channels = [
    { icon: <BsEnvelope />, label: "Email", note: "preferred", handle: "hello@knlrvr.dev", href: "mailto:hello@knlrvr.dev" },
    { icon: <FaLinkedin />, label: "LinkedIn", handle: "/in/kane-lariviere", href: "https://www.linkedin.com/in/kane-lariviere" },
    { icon: <FaGithub />, label: "GitHub", handle: "@knlrvr", href: "https://www.github.com/knlrvr" },
]

export default function Contact() {
    return (
        <Section id="contact" index="004" label="get in touch.">
            {/* Hairline grid: 1px gaps over the rule color read as cell borders. */}
            <Reveal delay={0.16}>
                <div className="grid gap-px border border-(--rule) bg-(--rule) sm:grid-cols-3">
                    {channels.map((c) => (
                        <Link
                            key={c.label}
                            href={c.href}
                            target="_blank"
                            className="group flex h-28 flex-col justify-between bg-(--frame) p-4 transition-colors duration-150 hover:bg-neutral-50 dark:hover:bg-neutral-950"
                        >
                            <div className="flex items-start justify-between text-sm text-neutral-500">
                                {c.icon}
                                <LuArrowUpRight className="text-neutral-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-medium tracking-tight">
                                    {c.label}
                                    {c.note && <span className="ml-1.5 font-normal italic text-neutral-400 dark:text-neutral-600">({c.note})</span>}
                                </span>
                                <span className="font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                                    {c.handle}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}
