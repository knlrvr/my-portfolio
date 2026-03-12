import Link from "next/link";
import PageTop from "../components/page-top";
import { Metadata } from "next";
import { SectionBreakSmall } from "../components/section-break";
import { LuArrowUpRight } from "react-icons/lu";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Colophon',
    description: 'Kane Lariviere • Software Developer • Colophon',
  }

export default function Colophon() {
    return (
        <div className="max-w-2xl mx-auto mb-12">
            <PageTop 
                title="Colophon"
                desc="How this site was built & the decisions behind it."
            />

            <div className="flex flex-col">

                <div className="">
                    <SectionBreakSmall label="Ethos" />
                    <p className="text-sm">
                        I&apos;m a better dev than designer, so I tend to err on the side of simplicity. I like when things are straight forward and easily understood. That being said, I try to break this portfolio as often as I can by trying new technologies and patterns, and staying aligned with best practices in the ecosystem. I would encourage anyone with a personal portfolio to do the same. 
                    </p>
                </div>
            

                <div className="">
                    <SectionBreakSmall label="typography" />
                    <p className="text-sm">
                        This site uses the Inter typeface because it looks <em>great</em> and is less for me to worry about.
                    </p>
                </div>

                <div className="">
                    <SectionBreakSmall label="Tech Stack" />
                    <p className="text-sm">
                        This site is built with <Link href="https://nextjs.org/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Next.js</Link> with TypeScript and <Link href="https://tailwindcss.com/" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Tailwind </Link> v4. It&apos;s hosted on <Link href="https://vercel.com" className="underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500 transition-colors duration-150">Vercel</Link>. 
                    </p>

                    <div className="mt-6">
                        <Link href="https://github.com/knlrvr/my-portfolio" className="group inline-flex items-center gap-1 text-xs group w-fit border border-mist-500 px-2 py-0.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150">
                            <span className="text-neutral-700 dark:text-neutral-300">
                                GitHub Repo
                            </span>
                            <LuArrowUpRight className="mt-0.5 text-mist-500 group-hover:-translate-y-px group-hover:translate-x-px transition-transform duration-150" />
                        </Link>
                    </div>
                </div>

                <div className="">
                    <SectionBreakSmall label="TypeScript" />
                    <p className="text-sm">
                        <em>Obviously</em>.
                    </p>
                </div>

                <div className="">
                    <SectionBreakSmall label="Tailwind" />
                    <p className="text-sm">
                        Tailwind let&apos;s you do two things &mdash; develop quickly and create a cohesive design system. Building with Tailwind means saving time without sacrificing meaningful work. 
                    </p>
                </div>

                <div className="">
                    <SectionBreakSmall label="Next.js & Vercel" />
                    <p className="text-sm">
                        Next.js is the best, if not the easiest, way to build web applications with React. It only makes sense to host a Next.js application with the team that maintains it. 
                    </p>
                </div>

                <div className="">
                    <SectionBreakSmall label="Domain Name" />
                    <p className="text-sm">
                        The domain name is just my name without any vowels. I first created it as my GitHub username, and it only made sense to continue using it for anything dev related.
                    </p>
                </div>

            </div>
        </div>
    )
}