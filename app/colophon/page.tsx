import Link from "next/link";
import { Metadata } from "next";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "../components/effects/reveal";
import PageTop from "../components/page-top";
import Section from "../components/section";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Colophon',
    description: 'Kane Lariviere • Software Developer • Colophon',
  }

const inlineLink = "underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 dark:decoration-neutral-700 dark:hover:decoration-neutral-500 transition-colors duration-150"
const body = "blog max-w-md text-[13px] text-neutral-600 dark:text-neutral-400"

const sections: { label: string; content: React.ReactNode }[] = [
    {
        label: "ethos.",
        content: (
            <p className={body}>
                I&apos;m a better dev than designer, so I tend to err on the side of simplicity. I like when things are straight forward and easily understood. That being said, I try to break this portfolio as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone with a personal portfolio to do the same.
            </p>
        ),
    },
    {
        label: "typography.",
        content: (
            <p className={body}>
                This site uses the Inter typeface because it looks <em>great</em> and is less for me to worry about.
            </p>
        ),
    },
    {
        label: "tech stack.",
        content: (
            <>
                <p className={body}>
                    This site is built with <Link href="https://nextjs.org/" className={inlineLink}>Next.js</Link> with TypeScript and <Link href="https://tailwindcss.com/" className={inlineLink}>Tailwind</Link> v4. It&apos;s hosted on <Link href="https://vercel.com" className={inlineLink}>Vercel</Link>.
                </p>
                <Link
                    href="https://github.com/knlrvr/my-portfolio"
                    target="_blank"
                    className="group mt-6 flex w-fit items-center gap-1.5 text-xs font-medium tracking-tighter transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-500"
                >
                    GitHub repo
                    <LuArrowUpRight className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </>
        ),
    },
    {
        label: "typescript.",
        content: <p className={body}><em>Obviously</em>.</p>,
    },
    {
        label: "tailwind.",
        content: (
            <p className={body}>
                Tailwind let&apos;s you do two things &mdash; develop quickly and create a cohesive design system. Building with Tailwind means saving time without sacrificing meaningful work.
            </p>
        ),
    },
    {
        label: "next.js & vercel.",
        content: (
            <p className={body}>
                Next.js is the best, if not the easiest, way to build web applications with React. It only makes sense to host a Next.js application with the team that maintains it.
            </p>
        ),
    },
    {
        label: "domain name.",
        content: (
            <p className={body}>
                The domain name is just my name without any vowels. I first created it as my GitHub username, and it only made sense to continue using it for anything dev related.
            </p>
        ),
    },
]

export default function Colophon() {
    return (
        <main>
            <PageTop
                title="Colophon"
                description="How this site was built & the decisions behind it."
                back={false}
                meta={[
                    { label: "Framework", value: "Next.js" },
                    { label: "Styling", value: "Tailwind v4" },
                    { label: "Type", value: "Geist & Geist Mono" },
                    { label: "Hosting", value: "Vercel" },
                ]}
            />

            {sections.map((s, i) => (
                <Section key={s.label} index={String(i + 1).padStart(3, "0")} label={s.label} dense>
                    <Reveal delay={0.16}>{s.content}</Reveal>
                </Section>
            ))}
        </main>
    )
}
