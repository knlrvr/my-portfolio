import Link from "next/link";
import PageTop from "../components/page-top";
import { Metadata } from "next";
import { SectionBreakSmall } from "../components/section-break";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "../components/effects/reveal";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Colophon',
    description: 'Kane Lariviere • Software Developer • Colophon',
  }

export default function Colophon() {
    return (
        <div className="max-w-sm mx-auto mb-12">
            <PageTop 
                title="Colophon"
                desc="How this site was built & the decisions behind it."
            />

            <div className="flex flex-col">

                <div className="">
                    <SectionBreakSmall label="ethos" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            I&apos;m a better dev than designer, so I tend to err on the side of simplicity. I like when things are straight forward and easily understood. That being said, I try to break this portfolio as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone with a personal portfolio to do the same. 
                        </p>
                    </Reveal>
                </div>
            

                <div className="">
                    <SectionBreakSmall label="typography" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            This site uses the Inter typeface because it looks <em>great</em> and is less for me to worry about.
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <SectionBreakSmall label="tech stack" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            This site is built with <Link href="https://nextjs.org/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Next.js</Link> with TypeScript and <Link href="https://tailwindcss.com/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Tailwind </Link> v4. It&apos;s hosted on <Link href="https://vercel.com" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Vercel</Link>. 
                        </p>
                    </Reveal>

                    <Reveal delay={0.32}>
                        <Link href="https://github.com/knlrvr/my-portfolio" className="group flex items-center gap-1 text-xs w-fit mt-8 rounded-md px-4 py-2 bg-mist-600 dark:bg-mist-400 hover:bg-mist-600/80 dark:hover:bg-mist-400/80 transition-colors duration-150">
                            <span className="text-mist-100 dark:text-mist-900">
                                GitHub Repo
                            </span>
                            <LuArrowUpRight className="mt-0.5 text-mist-100 dark:text-mist-900 group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
                        </Link>  
                    </Reveal>
                </div>

                <div className="">
                    <SectionBreakSmall label="typescript" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            <em>Obviously</em>.
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <SectionBreakSmall label="tailwind" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            Tailwind let&apos;s you do two things &mdash; develop quickly and create a cohesive design system. Building with Tailwind means saving time without sacrificing meaningful work. 
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <SectionBreakSmall label="next.js & vercel" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            Next.js is the best, if not the easiest, way to build web applications with React. It only makes sense to host a Next.js application with the team that maintains it. 
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <SectionBreakSmall label="domain name" />
                    <Reveal delay={0.16}>
                        <p className="text-sm">
                            The domain name is just my name without any vowels. I first created it as my GitHub username, and it only made sense to continue using it for anything dev related.
                        </p>
                    </Reveal>
                </div>

            </div>
        </div>
    )
}