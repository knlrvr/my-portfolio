import Link from "next/link";
import { Metadata } from "next";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "../components/effects/reveal";
import { SectionStripSm } from "../components/section-strip";
import PageTop from "../components/page-top";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Colophon',
    description: 'Kane Lariviere • Software Developer • Colophon',
  }

export default function Colophon() {
    return (
        <div className="max-w-sm mx-auto mb-12">

            <PageTop
                title="Colophon"
                description="How this site was built & the decisions behind it.   "
                back={false}
            />

            <div className="flex flex-col">

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="ethos" number="001" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            I&apos;m a better dev than designer, so I tend to err on the side of simplicity. I like when things are straight forward and easily understood. That being said, I try to break this portfolio as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone with a personal portfolio to do the same. 
                        </p>
                    </Reveal>
                </div>
            

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="typography" number="002" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            This site uses the Inter typeface because it looks <em>great</em> and is less for me to worry about.
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="tech stack" number="003" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            This site is built with <Link href="https://nextjs.org/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Next.js</Link> with TypeScript and <Link href="https://tailwindcss.com/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Tailwind </Link> v4. It&apos;s hosted on <Link href="https://vercel.com" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Vercel</Link>. 
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <Link 
                            href="https://github.com/knlrvr/my-portfolio"
                            className="group flex gap-2 items-center w-fit mt-8 text-xs pl-4 pr-2 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full"    
                        >
                            <span className="font-medium tracking-tighter">GitHub Repo</span>
                            <div className="bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-800 rounded-full p-2">
                                <LuArrowUpRight className="group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150"/>
                            </div>
                        </Link>
                    </Reveal>
                </div>

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="TypeScript" number="004" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            <em>Obviously</em>.
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="Tailwind" number="005" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            Tailwind let&apos;s you do two things &mdash; develop quickly and create a cohesive design system. Building with Tailwind means saving time without sacrificing meaningful work. 
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="Next.js & Vercel" number="006" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            Next.js is the best, if not the easiest, way to build web applications with React. It only makes sense to host a Next.js application with the team that maintains it. 
                        </p>
                    </Reveal>
                </div>

                <div className="">
                    <Reveal delay={0.16}>
                        <SectionStripSm label="domain name" number="007" />
                        <p className="text-sm blog text-neutral-600 dark:text-neutral-400">
                            The domain name is just my name without any vowels. I first created it as my GitHub username, and it only made sense to continue using it for anything dev related.
                        </p>
                    </Reveal>
                </div>

            </div>
        </div>
    )
}